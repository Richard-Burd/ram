// NOTE: anchor links and hyperlinks are both enabled by the
// Next.js "<Link />" component, so this component is slated for
// deletion and will be replaced by the <TextLink /> component.

export default function AnchorLink({ text, link }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
      >
        <strong>{text}</strong>
      </a>
    </>
  );
}

{
  /* <a
  href="https://www.urbancruiseship.org"
  target="_blank"
  rel="noreferrer"
  className="duration-500 hover:text-red-900 hover:underline focus:text-red-900 focus:underline text-blue-300 transition"
>
  <strong>Urban Cruise Ship&apos;s</strong>
</a>; */
}
