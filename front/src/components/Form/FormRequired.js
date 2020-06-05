import React, { memo } from 'react'

import Info from '../Icon/Info'

export const FormRequired = () => (
  <div
    style={{
      fontSize: 12,
      padding: 1
    }}
  >
    <Info color="#ea3d53" />
  </div>
)

FormRequired.propTypes = {}

FormRequired.defaultProps = {}

export default memo(FormRequired)
