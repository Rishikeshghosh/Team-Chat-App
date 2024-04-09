"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <div>
      <h2>
        Something went wrong in ---
        app/(main)/(routes)/server/[serverId]/conversations/[memberId] !
        {error.message}
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
