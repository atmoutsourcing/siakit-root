import { useRef } from 'react'

import { Button } from '@siakit/button'
import { Card } from '@siakit/card'
import { Footer } from '@siakit/footer'
import { Form, FormHandles, RichTextInput } from '@siakit/form-unform'
import { Flex } from '@siakit/layout'

export function FormRich() {
  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: any) {
    console.log('handle submit', data)
  }

  return (
    <Card flex overflow direction="column">
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={{
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in nisl mi. Phasellus vitae luctus tellus. Nam a dapibus turpis. Curabitur gravida velit non mauris scelerisque, sit amet viverra purus accumsan. Fusce aliquam malesuada luctus. Duis finibus massa ut tortor mattis, quis accumsan sapien luctus. Nullam nec sapien vel est semper cursus eget in leo. Integer a enim ac metus fermentum malesuada. Morbi maximus massa eget enim mollis, ac sodales nisl sagittis. Quisque tincidunt tortor sit amet libero dignissim efficitur. Duis placerat ultrices posuere. Sed vulputate justo sem, ac viverra risus aliquam ut. Curabitur a erat cursus, euismod nisl eget, eleifend ante.

        Praesent id sodales ante. Nulla efficitur ex auctor interdum mollis. Proin eleifend est eget ex euismod ullamcorper eu vel justo. Vestibulum lobortis ex sit amet magna facilisis dignissim. Etiam ac nisi sed elit euismod viverra at et velit. Nunc in ligula mauris. Sed id nisl eget ipsum pellentesque porttitor et at arcu. Integer auctor semper rhoncus. Quisque nec velit elit.
        
        Nullam augue lectus, faucibus quis placerat vitae, lacinia id libero. Proin a lorem vel est congue egestas ut euismod lectus. Vivamus vulputate neque in orci auctor, sit amet tristique metus ultrices. Cras malesuada viverra turpis, non imperdiet odio porta a. Vivamus in dui nec mauris rhoncus varius ac non turpis. Nunc eu lorem purus. Ut volutpat enim quis dui rutrum auctor ac ac lacus. Aliquam volutpat elit vel lectus tincidunt, in ultricies lorem dignissim. Suspendisse potenti.
        
        In imperdiet magna vel quam auctor, nec hendrerit velit laoreet. Aenean augue sem, vestibulum nec ante nec, finibus scelerisque eros. Donec turpis turpis, dapibus sit amet consectetur nec, pulvinar nec est. Phasellus iaculis consequat orci, ac commodo nunc bibendum ac. Nulla facilisi. Mauris id ante velit. Pellentesque malesuada id est vitae faucibus. Vestibulum rutrum sagittis lorem, rutrum tristique neque tincidunt non. Donec ac egestas erat. Vestibulum magna urna, bibendum a tellus sit amet, fringilla interdum magna. Quisque sed sapien ullamcorper, hendrerit nunc laoreet, condimentum elit. Duis consequat nulla nec massa consequat ultrices.
        
        Vestibulum convallis nulla lorem, eget aliquet lacus cursus vel. Integer eu vehicula nunc. Nulla nec neque tortor. Aliquam arcu urna, laoreet non volutpat id, posuere non orci. Quisque velit dolor, rhoncus a semper at, volutpat tempor sem. Pellentesque aliquet, lectus eu rhoncus pretium, odio urna ullamcorper risus, ut interdum massa velit sed tortor. Nulla eget purus egestas, tincidunt elit id, sodales urna. Phasellus ultrices tempor mauris et scelerisque. Vestibulum facilisis porta ex, eget eleifend quam. Donec facilisis lacus consequat nisi molestie, quis posuere lorem finibus. Vivamus tristique, sapien ut pharetra rutrum, erat leo consequat ex, nec tempus nibh est et velit. Quisque eu sollicitudin lectus, quis sodales neque. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
        }}
        flex
        overflow
      >
        <Flex flex padding overflow>
          <RichTextInput name="text" label="Text" placeholder="Text" flex />
        </Flex>

        <Footer>
          <Button type="submit">submit</Button>
        </Footer>
      </Form>
    </Card>
  )
}
