import CoverPhoto from "../../images/bg-pattern-card.svg";
import "./CardProfile.scss";
import PhotoProfile from "../../images/image-victor.jpg";

export default function CardProfile() {
  return (
    <div className="container-card">
      <img src={CoverPhoto} alt="Capa do perfil" />
      <div className="card-infos">
        <p>
          <strong>Victor Crest </strong>26
        </p>
        <p>London</p>

        <div className="photo-profile">
          <img src={PhotoProfile} alt="Profile photo" />
        </div>
      </div>

      <div className="card-info-numbers">
        <div>
          <span>80k</span>
          <span>Followers</span>
        </div>

        <div>
          <span>803k</span>
          <span>Likes</span>
        </div>

        <div>
          <span>1.4k</span>
          <span>Photos</span>
        </div>
      </div>
    </div>
  );
}
