import { Bio, Info, ProfileContainer, ProfileContent, Section } from "./styles";
import ProfileImg from '/src/assets/avatar.png';
import GithubIcon from '/src/assets/icon/github.svg';

export function Profile(){
  return(
    <>
    <Section>
      <ProfileContainer>
        <ProfileContent>
          <div>
          <img src={ProfileImg}/>
          </div>

          <section>
            <Bio>
              <h1>Cameron Williamson</h1>
              <a href="github.com">GITHUB</a>
            </Bio>
             
             <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

            <Info>
                <span><img src={GithubIcon}/>texto</span>
                <span><img src={GithubIcon}/>texto</span>
            </Info>
            
            
          </section>
        </ProfileContent>
      </ProfileContainer>
      </Section>
    </>

  )
}