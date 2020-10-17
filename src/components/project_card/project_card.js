import React from 'react'
import { Icon, Item } from 'semantic-ui-react'
import './project_card.scss';

const ProjectCard = (props) => (
  <Item.Group link>
    <Item>
      <Item.Image size='tiny' src={props.logo} />

      <Item.Content>
        <Item.Header>{props.name}</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, mollitia? Minus debitis dolor praesentium explicabo esse nihil corporis, recusandae at quam. Saepe libero, cumque possimus doloremque corporis ipsam error porro. </Item.Description>
        <Item.Extra>
          <Icon color='green' name='check' /> 121 Votes
        </Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ProjectCard