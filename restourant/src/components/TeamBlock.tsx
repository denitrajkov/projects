import React from "react";

export interface TeamItemInterface {
  id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  position: string;
}

export interface TeamBlockInterface {
  preTitle: string;
  title: string;
}

interface Props {
  teamBlock: TeamBlockInterface;
  team: TeamItemInterface[];
}

const TeamBlock: React.FC<Props> = ({ teamBlock, team }) => {
  return (
    <div className="pt-5 pb-3">
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">
            {teamBlock.preTitle}
          </h5>
          <h1 className="mb-5">{teamBlock.title}</h1>
        </div>
        <div className="row g-4">
          {team.map(teamItem => (
            <div key={teamItem.id} className="col-lg-3 col-md-6">
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img className="img-fluid" src={teamItem.avatar} alt="" />
                </div>
                <h5 className="mb-0">
                  {teamItem.first_name} {teamItem.last_name}
                </h5>
                <small>{teamItem.position}</small>
                <div className="d-flex justify-content-center mt-3">
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamBlock;
