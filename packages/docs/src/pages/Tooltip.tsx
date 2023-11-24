import { Flex } from '@siakit/layout'
import { Modal, ModalContent } from '@siakit/modal'
import { Tooltip as STooltip } from '@siakit/tooltip'

export function Tooltip() {
  return (
    <Modal open>
      <ModalContent title="modal">
        <STooltip content="lorem">
          <p>lorem</p>
        </STooltip>
      </ModalContent>
    </Modal>
  )
}
