import { Flex } from '@siakit/layout'
import { List, ListItem } from '@siakit/list'

export function ListPage() {
  return (
    <Flex direction="column">
      <List type="ordered">
        <ListItem>item 1</ListItem>
        <ListItem>item 2</ListItem>
        <ListItem>item 3</ListItem>
        <ListItem>item 4</ListItem>
      </List>

      <List type="unordered">
        <ListItem>item 1</ListItem>
        <ListItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus
          provident sint, <a href="https://google.com">possimus</a> eligendi
          voluptatum sit, praesentium harum saepe asperiores dicta, hic
          inventore. Tempora consectetur culpa ad neque alias laboriosam?
        </ListItem>
        <ListItem>item 3</ListItem>
        <ListItem>item 4</ListItem>
      </List>
    </Flex>
  )
}
