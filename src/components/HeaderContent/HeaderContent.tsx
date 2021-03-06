import { Col, Row } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderNavbar from './HeaderNavbarr'

const HeaderContent:React.FC<{location:string}> = ({location}) => {
  return (
    <Header className="header">
      <Row>
        <Col span={18}> <HeaderNavbar location={location}/></Col>
        <Col span={6}><HeaderLogo /></Col>
      </Row>
    </Header>
  )
}
export default HeaderContent