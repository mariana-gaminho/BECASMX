import React, {useContext, useEffect} from 'react'
import CarouselC from './HomeComponents/CarouselC';
import { MyContext } from '../Context'
import { Tabs, Button, Popover } from 'antd'
const { TabPane } = Tabs

const Home = () => {
    const {changePlace } = useContext(MyContext)
    const content = (
      <div>
        <p>mariianagamino@gmail.com</p>
      </div>
    )

    useEffect(() => {
      changePlace('Home')
      
    }, [changePlace])
    return (
    <div>
      
      <CarouselC/>
      <div className="tabs">
      <Tabs defaultActiveKey="1" animated={false}>
        <TabPane tab="Quiénes somos" key="1">
          <div className="content">
          <h2>Bienvenid@!</h2>
          <h4>BECAS:MX es un portal en el que monitoreamos medios de comunicación para colectar convocatorias de 
          becas, premios, concursos y oportunidades para cualquier persona que 
          desee superarse. Aquí encontrarás información relevante para que puedas acceder a un desarrollo 
          profesional más amplio de acuerdo a tu perfil y aspiraciones.
          </h4><br/><hr/><br/>
          <div className="imageAndText">
            <img src="/GradIcon.png" alt="icon" width="150"/>
            <div style={{marginLeft: 20}}>
              <h2>Nuestra historia</h2>
              <h4 style={{textAlign: "justify"}}>BECAS:MX surgió originalmente en el 2017 como una cuenta 
                en Twitter con el mismo propósito de ayudar
                a las personas a superarse. Si gustas, puedes visitar la 
                cuenta <a href="https://twitter.com/becas_mx" target="blank">aquí</a>.
              </h4>
            </div>
          </div><br/>
          </div>
        </TabPane>
        <TabPane tab="Nuestra página" key="2">
          <div className="content">
          <h2>Un poco más sobre nosotros</h2>
          <div className="imageAndText">
          <img src="/BookIcon.png" alt="icon" height="90"/>
          <h4 style={{marginLeft: 20}}>Nuestra página cuenta con información de becas, premios y concursos nacionales 
            e internacionales. 
            Con la finalidad de ampliar las oportunidades de educación y contribuir en tu crecimiento profesional, 
            nosotros te ayudamos, de manera rápida y ordenada, a localizar 
            becas de acuerdo a tu perfil profesional, así como a conocer los requisitos y fechas límite de aplicación. <br/>
            <br/>
            Este portal pensado y creado para ti te provee de noticias relevantes e información en torno a las convocatorias 
            de tu interés. Asimismo, el sistema te brinda la posibildad de registrarte y seleccionar las áreas de tu interés.
            ¡Nosotros te contactaremos cada vez que surja una oportunidad para ti!
          </h4>
          </div><br/><hr/><br/>
          </div>
        </TabPane>
        <TabPane tab="Contacto" key="3">
          <div className="content">
            <h2>¡Ayúdanos a mejorar!</h2>
            <h4>¿Sabes de alguna convocatoria que no esté anunciada aquí?
            ¡Haznos saber! <br/><br/>
            <Popover content={content} title="Dirección de correo" trigger="hover">
            <a href="mailto:hola@gmail.com?subject=Convocatoria%20de...&amp;body=%C2%A1Hola!%20Quiero%20compartir%20una%20convocatoria.">
              <Button type="primary">Envíanos un correo</Button>
            </a>
            </Popover>
            </h4>
          </div>
        </TabPane>
      </Tabs>
      </div>
    </div>
    )
  }

export default Home
