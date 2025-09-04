import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './galeria.css';

// Importamos las imágenes directamente
import AboutUsImg from '../assets/galeria1.jpg';
import CollaborationImg from '../assets/galeria2.webp';
import FAQImg from '../assets/galeria.webp';

export default function GallerySection() {
  const { t } = useTranslation();

  // Tomamos los textos desde i18n
  const galleryTexts = t('gallery', { returnObjects: true });

  // Creamos un array de bloques combinando texto e imagen
  const gallery = [
    { ...galleryTexts[0], img: AboutUsImg },
    { ...galleryTexts[1], img: CollaborationImg },
    { ...galleryTexts[2], img: FAQImg }
  ];

  // Variantes de animación
  const fadeInSide = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: (i = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: i * 0.3 }
    })
  };

  return (
    <Container className="my-5">
      {gallery.map((block, index) => {
        const direction = index % 2 === 0 ? 'hiddenLeft' : 'hiddenRight';
        return (
          <Row
            key={index}
            className="align-items-center my-5"
            style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
          >
            <Col md={6} className="mb-3">
              <motion.div
                custom={index}
                initial={direction}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInSide}
              >
                <h3 className="fw-bold mb-3">{block.title}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{block.text}</p>
              </motion.div>
            </Col>
            <Col md={6} className="mb-3">
              <motion.div
                custom={index}
                initial={direction}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInSide}
              >
                <img
                  src={block.img}
                  alt={block.title}
                  className="img-fluid rounded shadow-sm imagen"
                />
              </motion.div>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
