import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 25px;
  background-color: var(--color-grey-600);
`;
export const TotalExperienceBar = styled.div`
  width: 100%;
  position: relative;
  height: 3px;
  background-color: grey;
  margin-top: 10px;
`;
export const ExperienceBar = styled.div`
  height: 100%;
  width: 70%;
  background-color: #35b6d3;
`;
export const Name = styled.div`
  color: var(--color-white);
`;
export const Level = styled.div`
  color: #35b6d3;
  font-size: 12px;
`;
export const Experience = styled.div`
  color: var(--color-grey);
  font-size: 12px;
`;
export const Wrapper = styled.div`
  flex-grow: 1;
  padding: 0 20px;
`;
export const Information = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
