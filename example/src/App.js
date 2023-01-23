import React from 'react'

import { Button } from 'koalaui'
import 'koalaui/dist/index.css'

const App = () => {
  return (<>
    <Button type="dashed" clickfunc={(e) => {alert(e.target.innerHTML)}}>Dashed Button</Button>
    <Button type="primary" clickfunc={(e) => {alert(e.target.innerHTML)}}>Primary Button</Button>
    <Button clickfunc={(e) => {alert(e.target.innerHTML)}}>Default Button</Button>
    <Button type="link" clickfunc={(e) => {alert(e.target.innerHTML)}}>Link Button</Button>
    <Button type="danger" clickfunc={(e) => {alert(e.target.innerHTML)}}>Danger Button</Button>
    <Button type="disabled" clickfunc={(e) => {alert(e.target.innerHTML)}}>Disabled Button</Button>
    <Button type="success" clickfunc={(e) => {alert(e.target.innerHTML)}}>Success Button</Button>
    <Button type="insta" clickfunc={(e) => {alert(e.target.innerHTML)}}>Insta Button</Button>
    <Button type="googol" clickfunc={(e) => {alert(e.target.innerHTML)}}>Googol Button</Button>
    <Button type="error" clickfunc={(e) => {alert(e.target.innerHTML)}}>Error Button</Button>
    <Button type="pickme" clickfunc={(e) => {alert(e.target.innerHTML)}}>Pickme Button</Button>
  </>)
}

export default App
