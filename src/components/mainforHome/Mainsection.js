import React from "react";

const Mainsection = () => {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-1"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src="images/vision.jpeg" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3 dir="rtl" className="text-primary">
                الهدف التعليمى:
              </h3>
              <h3 className="" dir="rtl">
                يسعى الفصل الافتراضي إلى تنمية مهارات إنتاج الرسومات المتحركة
                ثنائية وثلاثية الأبعاد لدى طلاب كلية التربية بجامعة دمياط وتنمية
                التفكير الإبداعي والخيال لدى المتعلمين، كما ان الرسومات المتحركة
                بيئة مناسبة تلائم المجموعات الصغيرة، مما يزيد فاعلية التعلم،
                ويتيح فرص للعمل الجماعي. وتتميز الرسومات المتحركة بالجاذبية
                والمتعة، وهذا لا يتوفر في أي طريقة تدريس أخرى.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Mainsection;
