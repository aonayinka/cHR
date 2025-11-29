import { NextResponse } from "next/server";

const emailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/;

export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({ email: "" }));

  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !listId || !serverPrefix) {
    return NextResponse.json(
      { error: "Newsletter is not configured yet. Please try again later." },
      { status: 500 }
    );
  }

  const subscriberPayload = {
    email_address: email.trim(),
    status: "subscribed",
  };

  try {
    const response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
            "base64"
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberPayload),
      }
    );

    const data = await response.json().catch(() => ({}));

    if (response.ok) {
      return NextResponse.json({ message: "Subscribed" }, { status: 201 });
    }

    if (data?.title === "Member Exists") {
      return NextResponse.json(
        { error: "You're already subscribed with that email address." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        error:
          data?.detail ||
          "We couldn't add you to the list right now. Please try again soon.",
      },
      { status: response.status || 500 }
    );
  } catch (error) {
    console.error("Mailchimp subscribe error:", error);
    return NextResponse.json(
      { error: "Unexpected error. Please try again soon." },
      { status: 500 }
    );
  }
}
