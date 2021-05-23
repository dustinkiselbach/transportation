import styled from "styled-components";
import { Layout } from "../components/Layout";
import { SectionHeader } from "../components/SectionHeader";

import { useRouter } from "next/router";
import { Button } from "../components/Button";

const MadisonTransitTokenProgram = () => {
  const router = useRouter();
  // TODO add seo
  return (
    <Layout>
      <SectionHeader title="Madison Transit Token Donation Program">
        <SubHeader>
          Connecting residents to resources such as bus tokens, schedules, and
          information about transit options in Madison County.
        </SubHeader>
        <Content>
          <p>
            Are you an individual, organization or provider interested in
            donating funds for bus tokens to assist Madison County residents?
          </p>
          <ul>
            <li>
              You can donate by dropping off cash or check to the{" "}
              <strong>Hamilton Public Library</strong> (13 Broad Street,
              Hamilton, NY 13346).
            </li>
            <li>
              If you are contributing by check, please make it payable to:{" "}
              <strong>
                Birnie Bus Service, Inc. – Madison Transit System 2486 NY-12B -
                Hamilton, NY 13346{" "}
              </strong>
            </li>
            <li>
              Checks (not cash) can also be mailed to:{" "}
              <strong>
                Mobility Management 100 Eaton Street, PO Box 187 Morrisville, NY
                13408
              </strong>
            </li>
            <li>
              If you choose to mail a check, make sure to include a separate
              note with the Madison Transit System Token Donation Program as the
              recipient.
            </li>
          </ul>
          <p>
            Your contributions will be picked up by the Madison County Mobility
            Manager, Donny Ybarra, and taken to Birnie Bus – Madison Transit
            System to purchase tokens to distribute out to the community!{" "}
          </p>
        </Content>
        <SubHeader>
          How your Contribution helps Madison County Residents:
        </SubHeader>
        <Content>
          <ul>
            <li>
              Your token contributions are given to Madison County residents who
              are unable to purchase tokens because of limited income or other
              barriers
            </li>
            <li>
              Some token contributions are given to those who may be utilizing
              the bus system for the first time.
            </li>
            <li>
              Your donations help support those in Madison County who use the
              public transportation services for their grocery shopping, medical
              appointments, employment, and socialization!
            </li>
          </ul>
        </Content>
        <SubHeader>
          {" "}
          Feel free to reach out to Madison County Mobility Manager{" "}
          <i>Donny Ybarra</i> if you have any further questions. Thank you!
        </SubHeader>
        <Button text="Contact Us" onSubmit={() => router.push("/contact")} />
      </SectionHeader>
    </Layout>
  );
};

const SubHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Content = styled.div`
  margin-bottom: 2rem;
  p {
    font-size: 1.1rem;
  }
  & > * {
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 1rem;
    margin-left: 2rem;
  }
`;

export default MadisonTransitTokenProgram;
