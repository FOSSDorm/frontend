import React from "react";
import { Icon, Item, Label } from "semantic-ui-react";
import "./project_card.scss";

const ProjectCard = (props) => {
  // console.log(props.key);
  let Topics = props.topics.map((topic) => <Label as='a'>{topic}</Label>);
  return (
    <Item.Group link>
      <Item>
        <Item.Image size="tiny" src={props.avatar} />

        <Item.Content>
          <Item.Header>{props.name}</Item.Header>
          <Item.Meta>
            <Label as='a'>
              <Icon name="star" /> {props.star}
            </Label>
            &nbsp;&nbsp;&nbsp;
            <Label as='a'>
              <Icon name="fork" /> {props.fork}
            </Label>
            &nbsp;&nbsp;&nbsp;
            <Label as='a'>
              Issues
              <Label.Detail>{props.issues}</Label.Detail>
            </Label>
          </Item.Meta>
          <Item.Description> {props.description}</Item.Description>
          <Item.Extra>{Topics}</Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

export default ProjectCard;
