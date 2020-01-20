/** @jsx h */

import h from '../../../helpers/h'

export default function(change) {
  change.delete()
}

export const input = (
  <value>
    <document>
      <paragraph>
        one
        <link>
          <anchor />a<focus />
        </link>
        two
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        one
        <cursor />
        two
      </paragraph>
    </document>
  </value>
)
