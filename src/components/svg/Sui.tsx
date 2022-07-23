import React from 'react'

const Sui = ({ width = 24, color = '#6EBCEE' }: { width?: number; color?: string }) => (
  <svg
    id="SuiSvg"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={width * (40 / 28)}
    viewBox="-1 0 28 40"
  >
    <path
      d="M1.8611,33.0541a13.6477,13.6477,0,0,0,23.7778,0,13.89,13.89,0,0,0,0-13.8909L15.1824.8368a1.6444,1.6444,0,0,0-2.8648,0L1.8611,19.1632A13.89,13.89,0,0,0,1.8611,33.0541ZM10.8044,9.5555,13.0338,5.648a.8222.8222,0,0,1,1.4324,0L23.043,20.68a10.8426,10.8426,0,0,1,.8873,8.8828,9.4254,9.4254,0,0,0-.4388-1.4586c-1.1847-3.0254-3.8634-5.36-7.9633-6.9393-2.8187-1.0819-4.618-2.6731-5.3491-4.73C9.2375,13.7848,10.221,10.8942,10.8044,9.5555ZM7.0028,16.2184,4.457,20.68a10.8569,10.8569,0,0,0,0,10.8582,10.6776,10.6776,0,0,0,16.1566,2.935,7.5061,7.5061,0,0,0,.0667-5.2913c-.87-2.1858-2.9646-3.9308-6.2252-5.1876-3.6857-1.4147-6.08-3.6233-7.1157-6.5625A9.297,9.297,0,0,1,7.0028,16.2184Z"
      style={{ fill: color, fillRule: 'evenodd' }}
    />
  </svg>
)

export default Sui
