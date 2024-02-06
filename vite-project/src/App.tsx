import ShowMoreText from "react-show-more-text";

const YourComponent = () => {
  return (
    <>
      <ShowMoreText
        lines={3}
        more="Read More"
        less="Show less"
        // className="content-css"
        // anchorClass="show-more-less-clickable"
        // onClick={this.executeOnClick}
        // expanded={false}
        width={280}
        // truncatedEndingComponent={"... "}
      >
        We work with Experienced and certified dismantles in S.Korea. They will
        carefully dismantle your vehicles to your very order and satisfaction.
      </ShowMoreText>
    </>
  );
};

export default YourComponent;
