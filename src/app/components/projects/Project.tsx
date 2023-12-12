import React from 'react'
import ProjectCard from './ProjectCard'

function Project() {
  return (
   <div className='max-w-contentContainer mx-auto px-4 py-24' id="projects">
        <div className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-title font-semibold'>
                Meus projetos
            </h2>
            <p className='text-sm font-title text-greenText'>
                Open source
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
            <ProjectCard link='https://github.com/SolracSiul/get-my-own-ip' title='lib-npm' description='biblioteca npm para aplicações nodejs que recupera o IP da máquina e deixa disponível em código com o intuito de facilitar a configuração do ambiente de desenvolvimento! ' listItem={['nodejs', 'javascript', 'typescript', 'child_process']}/>
            <ProjectCard link='https://github.com/SolracSiul/generic-nextauth' title='next-auh' description='template de autenticação criado na versão 13.5 do nextjs que pode ser utilizado em diversas aplicações trocando apenas o endpoint onde é retornado as informações de cadastro' listItem={['nextjs', 'react', 'typescript', 'nextauth']}/>
            <ProjectCard link='https://github.com/SolracSiul/frontend-blog' title='simple-blog' description='blog post construido para a disciplina de desenvolvimento web da unifacisa com gerenciamento de usuários e todas as demais características que um blog/rede social possui' listItem={['nextjs', 'typescrip', 'tailwind css', 'react']}/>
            <ProjectCard link='https://github.com/SolracSiul/cadastroHero' title='seletiva-java' description='code challenger realizado em java17 para empresa do ramo de vendas online onde foi realizada a construção de uma APiRestful em java 17 com conexão com banco de dados relacional' listItem={['Java', 'Java 17', 'JDBC', 'Sring', 'MySQL']}/>
            <ProjectCard link='https://github.com/SolracSiul/porfolio-luis' title='portfolio' description='portfolio que está sendo acessado nesse momento com uma breve apresentação minha e com features que ainda desejo implementar' listItem={['Typescript', 'Nextjs', 'Tailwind CSS','framer-motion']}/>
            <ProjectCard link='https://github.com/SolracSiul/js-ts-core' title='js-core' description='estudo acerca das principais implementações do es6' listItem={['javascript', 'es6', 'typescript', 'web',]}/>

        </div>
   </div>
  )
}

export default Project