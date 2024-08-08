const ParallaxScroll = () => {
  return (
    <>
      <section className='scene one'>
        <header className='title-header'>
          <pre>
            <h1>
              "아름다운 꽃이라도 향기가 없는 꽃이 있듯이,
              <br />
              아무리 좋은 가르침이라도 그것을 실행하지 않으면
              <br />
              열매를 맺지 못한다." <br />
              <p>[석가모니 인생수업] 중에서</p>
            </h1>
          </pre>
        </header>
        <Content
          discript='아무리 알고 있는 것이 풍부하고 정교하더라도 실제로 적용하지 않으면 내 것이 될 수 없다. 
  실행한다는 것은 우리의 능력과 자신감을 강화시키는 일이 된다. 
  성공하든 실패하든 중요한 것이 아니다.'
        />
      </section>
      <section className='scene two'>
        <Content
          discript='실패를 통해 스스로의 한계를 발견하고 이를 극복하는 방법을 배울 수 있다. 
    이러한 경험을 통해 더 강하고 적극적인 사고방식을 가질 뿐만 아니라 새로운 도전에 대한 두려움을 줄일 수 있다.'
        />
      </section>
      <section className='scene three'>
        <Content
          discript='아무리 도자기 만드는 방법에 대해 좋은 가르침을 받아도 내가 한 번 빚어보는 것보다 더 나을 수는 없다. 
    이뿐만이 아니다. 그 어떤 가르침이라고 해서 무조건 옳은 건 아닐 것이다. 
    분명 나에게 맞지 않는 가르침도 있을 텐데 그걸 확인하는 방법은 직접 시도해 보는 것뿐이다.'
        />
      </section>
      <section className='scene four'>
        <Content
          discript='나에게 맞는지 맞지 않은지 확인하는 방법은 직접 부딪히는 일뿐이기 때문이다. 
    아무리 아름다운 말이나 중요한 가르침을 들어도 실행에 옮기지 않으면 소용없다. 
    향기 나는 꽃이 되고 싶다면 부지런히 움직여야 한다.'
        />
      </section>
    </>
  );
};

export default ParallaxScroll;

const Content = ({ discript, ...argv }: { discript: string }) => {
  return (
    <div className='discription'>
      <p>{discript}</p>
      <div className='discription-bg' />
    </div>
  );
};
