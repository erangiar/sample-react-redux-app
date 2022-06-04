import { toUpper } from "lodash";

export default function Heading(props) {
  return (
    <>
      <div className="heading">{toUpper(props.title)}</div>
    </>
  );
}
