/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const ACalculator = () => {
  const [soju, setSoju] = useState<number | string | undefined>('');
  const [sojuAC, setSojuAC] = useState<number | null>(0);
  const [beer, setBeer] = useState<number | string | undefined>('');
  const [beerAC, setBeerAC] = useState<number | null>(0);
  const [weight, setWeight] = useState<number | string | undefined>('');
  const [watermark, setWatermark] = useState<number | null>(0);

  useEffect(() => {
    if (soju) {
      setSojuAC(Number(soju) * 0.165 * 0.7894);
    }
    if (beer) {
      setBeerAC(Number(beer) * 0.046 * 0.7894);
    }
  }, [soju, beer]);

  useEffect(() => {
    if (sojuAC && beerAC && weight) {
      const tempWatermark = (sojuAC + beerAC) / (10 * (Number(weight) * 0.64));
      setWatermark(tempWatermark);
    }
  }, [sojuAC, beerAC, weight]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    if (name === 'soju') {
      setSoju(event.target.value);
    }
    if (name === 'beer') {
      setBeer(event.target.value);
    }
    if (name === 'weight') {
      setWeight(event.target.value);
    }
  };

  return (
    <Wrapper>
      <div>A / 10 * (P * R)</div>
      <div>
        <div>A 알코올의 양</div>
        <div>(음주량 * 술의 농도(%) * 알콜비중(0.7894)</div>
      </div>
      <div>
        <div>P 체중</div>
      </div>
      <div>
        <div>R 계수</div>
        <div>남 0.86</div>
        <div>여 0.64</div>
      </div>
      <div>
        <div>
          <span>소주</span>
          <div>
            <span>섭취량(ml)</span>
            <input type="number" name="soju" value={soju} onChange={(event) => handleChange(event)} />
          </div>
          <div>
            <span>알코올의 양(g)</span>
            <span>{sojuAC}</span>
          </div>
        </div>
        <div>
          <span>맥주</span>
          <div>
            <span>섭취량(ml)</span>
            <input type="number" name="beer" value={beer} onChange={(event) => handleChange(event)} />
          </div>
          <div>
            <span>알코올의 양(g)</span>
            <span>{beerAC}</span>
          </div>
        </div>
      </div>
      <div>
        <span>체중(kg)</span>
        <input type="number" name="weight" value={weight} onChange={(event) => handleChange(event)} />
      </div>
      <div>
        <span>워터마크 공식</span>
        <span>{watermark}</span>
      </div>
      <div>
        <span>알코올 분해시간</span>
        <span>{watermark ? watermark / 0.015 : ''}</span>
      </div>
    </Wrapper>
  );
};

export default ACalculator;
