import React, {useEffect, useState} from 'react';
import RedX from '../../../resources/svg/x_red.svg';
import styled from 'styled-components';
import Reveal from '../../Reveal';
import Card from '../../Card';
import Item from '../../Item';
import Divider from '../../Divider';
import List from '../../List';
import Tooltip from '../../Tooltip';
import Avatar from '../../Avatar';
import RemoveEmployeeModal from '../modals/RemoveEmployeeModal';
import { capitalizeWords } from '../../../utils/helpers';
import Pin from "../../Icon/Pin";
import UpdateEmployeeModal from "../modals/UpdateEmployeeModal";



const EmployeeItem = ({
  employee,
  handleEmployeeRemove,
  handleEmplyeeUpdate,
  setId
}) => {
  const { _id, firstName, lastName, company, location, position } = employee;
  const [isFlipped, setIsFlipped] = useState(false);
  const [removeEmployeeModalShow, setRemoveEmployeeModalShow] = useState(false);
  const [updateEmployeeModalShow, setUpdateEmployeeModalShow] = useState(false);
  
  const onEdit = () => {
    setId(_id);
    setUpdateEmployeeModalShow(true);
  };

  const onRemove = () => {
    setRemoveEmployeeModalShow(true);
  };


  const renderRemoveEmployeeModal = () => (
    <RemoveEmployeeModal
      isOpen={removeEmployeeModalShow}
      onClose={() => setRemoveEmployeeModalShow(false)}
      handleSubmit={(_id) => handleEmployeeRemove(_id)}
    />
  );
  const renderUpdateEmployeeModal = () => (
    <UpdateEmployeeModal
      isOpen={updateEmployeeModalShow}
      onClose={() => setUpdateEmployeeModalShow(false)}
      {...employee}
      handleSubmit={() => handleEmplyeeUpdate()}
    />
  );

  return (
    <div style={{ width: '300px', height: '358px' }}>
      {removeEmployeeModalShow && renderRemoveEmployeeModal()}
      {updateEmployeeModalShow && renderUpdateEmployeeModal()}
      <Reveal isActive={isFlipped}>
        <Reveal.Content>
          <Card>
            <div
              className="remove"
              onClick={() => onRemove()}
              style={{
                position: 'absolute',
                top: 6,
                right: 6
              }}
            >
              <Tooltip content="Remove User?" position="top center">
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
                <Avatar avatar={{ url: `https://api.adorable.io/avatars/${_id}` }} rounded firstName={firstName} />
                {/*{renderAvatar()}*/}
                <Item.Content style={{ width: 170, marginLeft: 16 }}>
                  <Item.Header numOfLines={1}>{firstName} {lastName}</Item.Header>
                  <Item.Subheader numOfLines={1}>{position}</Item.Subheader>
                  <Divider isHidden />
                  <Item.Extra numOfLines={1}>At {capitalizeWords(company)}</Item.Extra>
                  <Item.Extra numOfLines={1}> <Pin/>{location}</Item.Extra>
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
                <List.Item onClick={() => onEdit()} style={{ color: '#2675fe' }}>
                    EDIT
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
              <Tooltip content="Remove User?" position="top center">
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
                <List.Item onClick={() => console.log('reach out')} style={{ color: '#2675fe' }}>
                    EDIT
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
