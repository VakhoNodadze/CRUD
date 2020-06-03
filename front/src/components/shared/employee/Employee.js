import React, { useState } from 'react';
import RedX from '../../../resources/svg/x_red.svg';
import styled from 'styled-components';
import Reveal from '../../Reveal';
import Card from '../../Card';
import Item from '../../Item';
import Divider from '../../Divider';
import List from '../../List';
import Tooltip from '../../Tooltip';
import { capitalizeWords } from '../../../utils/helpers';



const EmployeeItem = ({
  _id,
  firstName,
  lastName,
  company,
  dx_country,
  dx_city,
  position
}) => {
  const [isFlipped, setIsFlipped] = useState(false);


  return (
    <div style={{ width: '300px', height: '358px' }}>
      <Reveal isActive={isFlipped}>
        <Reveal.Content>
          <Card>
            <div
              className="remove"
              onClick={() => console.log('remove')}
              style={{
                position: 'absolute',
                top: 6,
                right: 6
              }}
            >
              <Tooltip content="Bad match? Please tell us why" position="top center">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer'
                  }}
                >
                  <img src={RedX} alt="delete_user" />
                </div>
              </Tooltip>
            </div>
            <Card.Content>
              <Item size="big">
                {/* <Avatar avatar={{ url: profile_url || avatar_url }} rounded firstName={full_name} /> */}
                {/*{renderAvatar()}*/}
                <Item.Content style={{ width: 170, marginLeft: 16 }}>
                  <Item.Header numOfLines={1}>{firstName} {lastName}</Item.Header>
                  <Item.Subheader numOfLines={1}>{position}</Item.Subheader>
                  <Divider isHidden />
                  <Item.Extra numOfLines={1}>At {capitalizeWords(company)}</Item.Extra>
                  <Item.Extra numOfLines={1}>{dx_city}, {dx_country}</Item.Extra>
                </Item.Content>
              </Item>
            </Card.Content>
            <Card.Content>
              {/*<Match match={matchScore} />*/}
            </Card.Content>
            <Card.Content>
              <List horizontal centered>
                {/*{social_networks && social_networks.map((social_network) => renderSocialNetworkIcon(social_network))}*/}
              </List>
            </Card.Content>
            <Card.Content extra>
              <List>
                <List.Item onClick={() => setIsFlipped(true)}>SEE EXPERIENCE</List.Item>
                <List.Item onClick={() => console.log('reach out')} style={{ color: '#2675fe' }}>
                    REACH OUT
                </List.Item>
              </List>
            </Card.Content>
          </Card>
        </Reveal.Content>
        <Reveal.Content isHidden>
          <Card>
            <div
              className="remove"
              onClick={() => console.log('remove')}
              style={{
                position: 'absolute',
                top: 6,
                right: 6
              }}
            >
              <Tooltip content="Bad match? Please tell us why" position="top center">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    cursor: 'pointer'
                  }}
                >
                  <img src={RedX} alt="delete_user" />
                </div>
              </Tooltip>
            </div>
            <Card.Content overflow="auto">
              {/*{renderExperience()}*/}
              <Divider />
              {/*{renderSkills()}*/}
              <Divider />
              {/*{renderEducation()}*/}
            </Card.Content>
            <Card.Content extra>
              <List>
                <List.Item onClick={() => setIsFlipped(false)}>HIDE EXPERIENCE</List.Item>
                <List.Item onClick={() => console.log('reach out')} style={{ color: '#2675fe' }}>
                    REACH OUT
                </List.Item>
              </List>
            </Card.Content>
          </Card>
        </Reveal.Content>
      </Reveal>
    </div>
  );
};


const WrongAvatar = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  top: 0;
  left: 0;
  background: rgba(38, 117, 254, 0.8);
  opacity: 0;
  color: rgba(250, 120, 16, 1);
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  letter-spacing: 0.6px;
  &:hover {
    transition: opacity 400ms ease-in-out;
    opacity: 1;
  }
`;

export default React.memo(EmployeeItem);
