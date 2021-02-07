import styles from '../styles/Home.module.css'
import Head from '../src/infra/components/Head'
import Header from '../src/patterns/Header'
import Cards from '../src/components/Card'
import Footer from '../src/patterns/Footer'
import { LinkedIn, GitHub, MenuBook, CloudQueue }  from '@material-ui/icons';

export default function Home({githubData}) {
  return (
    <div className={styles.container}>
      <Head title={`${githubData.name} Profile`}/>
      <main className={styles.main}>
        <Header url={githubData.avatar_url}
                name={githubData.name}
                description={githubData.bio}/>   
        <div className={styles.grid}>
          <Cards url={githubData.blog}
                title={'LinkedIn'}
                description={'Find out more about my work, what technologies I use and my network'}
                icon={<LinkedIn/>}  />
          <Cards url={githubData.html_url}
                title={'GitHub'}
                description={'See some repositories, projects and collaborations'}
                icon={<GitHub/>} />
          <Cards url={'https://medium.com/@othiagoveloso'}
                title={'Medium'}
                description={'Some knowledge and articles about technology and more'}
                icon={<MenuBook/>} />
          <Cards url={'https://soundcloud.com/user-488915282'}
                title={'SoundCloud'}
                description={'In my free time, I also make music and production'}
                icon={<CloudQueue/>}  />
        </div>
      </main>
      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
  
  const response = await fetch('https://api.github.com/users/velosos')
  .then((serverResponse) => {
    return serverResponse.json();
    
  });
  return {
    props:{
      githubData:response
    },
  }
}