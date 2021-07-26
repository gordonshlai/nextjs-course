import Image from "next/image";
import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <Image
        src={props.image}
        alt={props.image}
        width={700}
        height={400}
        layout="intrinsic"
        className={classes.image}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
