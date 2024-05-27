import OpnionCard from "../../../components/cards/OpnionCard";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
    size: 2,
    color: "#29e",
    className: "bar-of-progress",
    delay: 80,

});

export function loader() {
    progress.start();
    setTimeout(() => {
        progress.finish();
    }, 1000)
    return true
}

export default function Opinions() {
  return (
    <>
      <div id="opnions">
        <div class="title">
          <i class="fa-light fa-arrow-right"></i>
          <h4>دیدگاه ها</h4>
        </div>
        <div class="details">
          <div class="menu">
            <div class="head1">
              <a href="#">در انتظار ثبت نظر</a>
            </div>
            <div class="head1">
              <a href="#">دیدگاه های من</a>
            </div>
          </div>
          <div class="items">
            <section class="item">
              <OpnionCard
                image={process.env.PUBLIC_URL + "/assets/img/damnman.png"}
              />
              <OpnionCard
                image={process.env.PUBLIC_URL + "/assets/img/damnman2.png"}
              />
              <OpnionCard
                image={process.env.PUBLIC_URL + "/assets/img/damnman.png"}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
