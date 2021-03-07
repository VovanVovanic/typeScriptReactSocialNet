import classes from './profile.module.scss'
import { Alert, Button, Col, Input, Row } from 'antd'
import React, { ChangeEvent, KeyboardEventHandler, useEffect, useState } from 'react'


export type ProfileStatusPropsType = {
  status: string
  setNewStatus: (status: string) => void
}
const ProfileStatus: React.FC<ProfileStatusPropsType> = ({ status, setNewStatus }) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(status)
  const [lengthErr, setLengthErr] = useState<boolean>(false)

  useEffect(() => {
    setInputValue(status)
  }, [status])
  useEffect(() => {
    if (inputValue.length >= 100) {
      setLengthErr(true);
    } else {
      setLengthErr(false);
    }
  }, [inputValue])
  

  const onEditMode = () => {
    setEditMode(true)
    setLengthErr(false)
  }
  const ofEditMode = () => {
    setEditMode(false)
    inputValue.length <= 100 && setNewStatus(inputValue);
    setLengthErr(false)
  }
  const onStatusUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && ofEditMode()
  };
  return (
    <Col span={24}>
      {!editMode && (
        <Row>
          <Col span={4} className={classes.status}>
            Status:{" "}
          </Col>
          <Col
            span={18}
            onDoubleClick={onEditMode}
            className={classes.statusInfo}
          >
            {status || "-------"}
          </Col>
          <Button type="primary" onClick={onEditMode}>
            Edit status
          </Button>
        </Row>
      )}

      {editMode && (
        <Col span={24}>
          <Input
            autoFocus
            onBlur={ofEditMode}
            onChange={onStatusUpdate}
            value={inputValue}
            onKeyDown={onKeyDown}
          />
          {lengthErr && <Alert message="To long. Status must be max of 100 characters length" type="error" />}
        </Col>
      )}
    </Col>
  );
}
export default ProfileStatus