import React, { ChangeEvent, useEffect, useState } from 'react'


export type ProfileStatusPropsType = {
  status: string
  setNewStatus: (status: string) => void
}
const ProfileStatus: React.FC<ProfileStatusPropsType> = ({ status, setNewStatus }) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>(status)

  useEffect(() => {
    setInputValue(status)
  }, [status])

  const onEditMode = () => {
    setEditMode(true)
  }
  const ofEditMode = () => {
    setEditMode(false)
    setNewStatus(inputValue)
  }
  const onStatusUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  };
  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={onEditMode}>{status || '-------'}</span>
        </div>
      )}

      {
        editMode && <div>
          <input
            autoFocus onBlur={ofEditMode}
            onChange={onStatusUpdate}
            value={inputValue} />
        </div>
      }
    </div>
  );
}
export default ProfileStatus