import { useState } from 'react'

import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'
import { Modal, ModalContent } from '@siakit/modal'
import { Tabs, TabsList, TabsItem, TabsContent } from '@siakit/tabs'
import { Text } from '@siakit/text'

export function TestPage() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <Modal open={visible} onOpenChange={setVisible}>
        <ModalContent title="modal title">
          <Flex>
            <Text>modal</Text>
          </Flex>
        </ModalContent>
      </Modal>

      <Tabs defaultValue="item1">
        <TabsList>
          <TabsItem value="item1" badge={23}>
            item item item 1
          </TabsItem>
          <TabsItem value="item2">item item item 2</TabsItem>
          <TabsItem value="item3">item item item 3</TabsItem>
          <TabsItem value="item4">item item item 4</TabsItem>
        </TabsList>

        <TabsContent value="item1">
          <Flex flex direction="column">
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellendus assumenda ipsum pariatur voluptatum, blanditiis
              aspernatur quaerat animi neque? Odio, dignissimos quis. Ipsam
              nihil dolore corporis sed neque! Impedit, nam!
            </Text>
          </Flex>
        </TabsContent>

        <TabsContent value="item2">
          <Text>item 2</Text>
        </TabsContent>

        <TabsContent value="item3">
          <Flex>
            <Text>item 3</Text>

            <Button type="button" onClick={() => setVisible(true)}>
              open modal
            </Button>
          </Flex>
        </TabsContent>
      </Tabs>
    </>
  )
}
