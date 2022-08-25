import { Grid } from '@siakit/layout'
import { Separator } from '@siakit/separator'

export function SeparatorPage() {
  return (
    <Grid columns={2}>
      <Separator />
      <Separator direction="vertical" />
    </Grid>
  )
}
