import React from 'react';

interface TextAdventureProps {
  text: string;
  title: string;
  description: string;
}

const AdventureProps: React.FC<TextAdventureProps> = ({ text, title, description }) => {
  return (
    <div>
      <p className='Text'>{text}</p>
      <p className='Title'>{title}</p>
      <p className='Description'>{description}</p>
    </div>
  );
};

interface Props {
  section: "Latest" | "Related";
}

const Adventure: React.FC<Props> = ({ section }) => {
  return (
    <>
      {section === "Latest" ? (
        <div className="Adventure">
          <div className="AdventureText">
            <AdventureProps
              text="about"
              title="Stories of Adventure"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo eveniet incidunt ab quis deleniti commodi vitae aliquam eum voluptatibus excepturi id facilis perspiciatis reprehenderit vero, et accusantium repellendus dolorum possimus nesciunt nihil repellat adipisci, atque repudiandae! Eveniet exercitationem animi sunt fugiat quae doloremque. Veniam ad totam rem, vero corrupti itaque assumenda tempore aspernatur distinctio, optio pariatur minima! Ex, commodi consequuntur quasi id esse sequi provident ad rerum alias velit natus, ducimus officia."
            />
          </div>

          <div className="AdventureImg">
            <img src="https://picsum.photos/id/1020/500/500" alt="" />
          </div>
        </div>
      ) : (
        <div className="Adventure">
          <div className="AdventureText">
            <AdventureProps
              text="about"
              title="Popular of Adventure"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo eveniet incidunt ab quis deleniti commodi vitae aliquam eum voluptatibus excepturi id facilis perspiciatis reprehenderit vero, et accusantium repellendus dolorum possimus nesciunt nihil repellat adipisci, atque repudiandae! Eveniet exercitationem animi sunt fugiat quae doloremque. Veniam ad totam rem, vero corrupti itaque assumenda tempore aspernatur distinctio, optio pariatur minima! Ex, commodi consequuntur quasi id esse sequi provident ad rerum alias velit natus, ducimus officia."
            />
          </div>

          <div className="AdventureImg">
            <img src="https://picsum.photos/id/1022/500/500" alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Adventure;
