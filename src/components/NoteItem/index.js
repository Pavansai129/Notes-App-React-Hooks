import {CustomNoteItem, Title, Note} from './styledComponents'

// Write your code here
const NoteItem = props => {
  const {eachNotes} = props
  const {title, note} = eachNotes
  return (
    <CustomNoteItem>
      <Title>{title}</Title>
      <Note>{note}</Note>
    </CustomNoteItem>
  )
}

export default NoteItem
