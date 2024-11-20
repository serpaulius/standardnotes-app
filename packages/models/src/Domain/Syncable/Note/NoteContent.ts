import { NoteType } from '@standardnotes/features'
import { ItemContent } from '../../Abstract/Content/ItemContent'
import { EditorLineWidth } from '../UserPrefs'

export interface NoteContentSpecialized {
  title: string
  text: string
  hidePreview?: boolean
  preview_plain?: string
  preview_html?: string
  spellcheck?: boolean
  editorWidth?: EditorLineWidth
  noteType?: NoteType
  editorIdentifier?: string
  authorizedForListed?: boolean
  // FIXME: naming - selection vs position?
  cursorPosition?: number
}

export type NoteContent = NoteContentSpecialized & ItemContent
