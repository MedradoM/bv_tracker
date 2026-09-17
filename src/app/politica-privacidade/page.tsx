import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Database,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Mail,
  PhoneCall,
  Clock,
  Navigation,
  ArrowUp,
  ArrowLeft,
  FileSpreadsheet,
  Globe,
  Radio,
} from "lucide-react";
import BgGradient from "@/components/ui/bg-gradient";

export const metadata: Metadata = {
  title: "Política de Privacidade | BV Tracker Rastreamento Veicular",
  description:
    "Conheça a Política de Privacidade e Proteção de Dados da BV Tracker. Entenda como tratamos dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).",
};

const summaryItems = [
  { id: "sec-1", title: "1. Introdução" },
  { id: "sec-2", title: "2. Sobre a LGPD" },
  { id: "sec-21", title: "2.1 Conceitos Importantes", indent: true },
  { id: "sec-22", title: "2.2 Coleta de Dados Pessoais", indent: true },
  { id: "sec-23", title: "2.3 Uso de Plataformas e Terceiros", indent: true },
  { id: "sec-24", title: "2.4 Tratamento de Dados de Menores", indent: true },
  { id: "sec-25", title: "2.5 Segurança da Informação", indent: true },
  { id: "sec-26", title: "2.6 Direitos dos Titulares", indent: true },
  { id: "sec-27", title: "2.7 Deveres dos Titulares", indent: true },
  { id: "sec-28", title: "2.8 Canais de Contato", indent: true },
  { id: "sec-29", title: "2.9 Cláusula de Geolocalização", indent: true },
  { id: "sec-3", title: "3. Alterações na Política" },
  { id: "sec-4", title: "4. Disposições Finais" },
];

export default function PoliticaPrivacidadePage() {
  return (
    <div className="relative min-h-screen pt-28 lg:pt-36 pb-20 text-slate-800">
      <BgGradient />

      <main className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Breadcrumb / Voltar */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors group py-2 px-3 rounded-lg hover:bg-white/60"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Voltar para o início
          </Link>

          <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold border border-blue-200 shadow-sm">
            LGPD • Lei nº 13.709/2018
          </span>
        </div>

        {/* Header Hero da Página */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden mb-12 border border-slate-700">
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden md:block">
            <ShieldCheck className="w-56 h-56 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-400/30">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Política Institucional
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
              Política de Privacidade
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Este documento orienta o público em geral sobre como tratamos dados
              pessoais na <strong>BV Tracker</strong>, com foco rigoroso em Segurança da
              Informação, Proteção de Dados Pessoais e Privacidade.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 border-t border-slate-700/80 pt-4">
              <span>
                <strong>Organização:</strong> BV Tracker Rastreamento
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                <strong>Revisão:</strong> {new Date().getFullYear()}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                <strong>Status:</strong> Em vigor
              </span>
            </div>
          </div>
        </div>

        {/* Layout em Grid com Sumário Lateral e Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coluna do Sumário (Sticky no Desktop) */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md border border-slate-200/80 lg:sticky lg:top-28">
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100">
                <FileText className="w-5 h-5 text-blue-700" />
                <h2 className="font-bold text-slate-900 text-lg">Sumário</h2>
              </div>

              <nav className="space-y-1 text-sm max-h-[70vh] overflow-y-auto pr-1">
                {summaryItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-colors hover:bg-blue-50 hover:text-blue-700 text-slate-600 ${
                      item.indent ? "pl-6 text-xs text-slate-500" : "font-medium"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <a
                  href="#top"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 text-sm font-semibold transition-all shadow-sm"
                >
                  <ArrowUp className="w-4 h-4" />
                  Voltar ao topo
                </a>
              </div>
            </div>
          </aside>

          {/* Coluna de Conteúdo */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-10">
            {/* Aviso Inicial */}
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3.5 text-amber-900 text-sm">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p>
                Recomendamos que você acompanhe eventuais atualizações desta Política,
                pois nossas práticas, tecnologias e serviços evoluem continuamente para
                assegurar a melhor proteção para você e sua frota.
              </p>
            </div>

            {/* SEÇÃO 1: INTRODUÇÃO */}
            <section
              id="sec-1"
              className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                  1
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Introdução</h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Somos a <strong>BV Tracker</strong>, uma empresa privada atuante no
                  setor de tecnologia, rastreamento veicular e segurança eletrônica.
                  Nesta Política de Privacidade você encontrará informações claras e
                  objetivas sobre como realizamos o tratamento de dados pessoais, sempre
                  em conformidade com a legislação vigente e atentos às melhores práticas
                  de governança, ética e responsabilidade.
                </p>

                <p className="font-semibold text-slate-800">Nos comprometemos a:</p>
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm">Respeitar integralmente a legislação aplicável;</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm">Garantir a segurança e integridade da informação;</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm">Atuar com máxima transparência nas relações;</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm">Proteger a privacidade dos titulares de dados.</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 pt-2">
                  Esta Política poderá ser atualizada periodicamente, motivo pelo qual
                  recomendamos sua leitura regular.
                </p>
              </div>
            </section>

            {/* SEÇÃO 2: SOBRE A LGPD */}
            <section
              id="sec-2"
              className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                  2
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Sobre a Lei Geral de Proteção de Dados (LGPD)
                </h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  A <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>{" "}
                  estabelece regras sobre coleta, uso, armazenamento e compartilhamento de
                  dados pessoais. A legislação aplica-se a organizações públicas e privadas
                  e tem como objetivo proteger os direitos fundamentais de liberdade e
                  privacidade, além de garantir o livre desenvolvimento da personalidade da
                  pessoa natural.
                </p>
              </div>

              {/* 2.1 CONCEITOS IMPORTANTES */}
              <div id="sec-21" className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                    2.1
                  </span>
                  Conceitos Importantes
                </h3>

                {/* Atores do Tratamento */}
                <div>
                  <h4 className="font-semibold text-slate-800 text-base mb-3 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                    Atores do Tratamento
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Titular dos Dados</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Pessoa natural a quem se referem os dados pessoais que são objeto
                        de tratamento.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Controlador</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Pessoa física ou jurídica a quem competem as decisões referentes ao
                        tratamento de dados pessoais.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Operador</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Pessoa física ou jurídica que realiza o tratamento de dados em nome
                        do controlador.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <p className="font-bold text-sm text-slate-900">Encarregado de Dados (DPO)</p>
                      <p className="text-xs text-slate-600 mt-1">
                        Canal de comunicação entre o controlador, titulares e a Autoridade
                        Nacional de Proteção de Dados (ANPD).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Dados Pessoais vs Sensíveis */}
                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                    <h5 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-700" />
                      Dados Pessoais
                    </h5>
                    <p className="text-xs text-slate-600 mb-2">
                      Qualquer informação que identifique ou possa identificar uma pessoa
                      natural, tais como:
                    </p>
                    <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                      <li>Nome completo</li>
                      <li>CPF e RG</li>
                      <li>E-mail e Telefone</li>
                      <li>Endereço IP</li>
                      <li>Placa e chassi do veículo monitorado</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <h5 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-slate-700" />
                      Dados Pessoais Sensíveis
                    </h5>
                    <p className="text-xs text-slate-600 mb-2">
                      Dados que podem gerar discriminação ou risco à integridade do titular:
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      Origem racial/étnica, convicção religiosa, opinião política, filiação sindical,
                      dados de saúde ou genéticos/biométricos.
                    </p>
                    <p className="text-xs font-semibold text-slate-700 mt-2">
                      * A BV Tracker não realiza a coleta nem o tratamento de dados pessoais sensíveis
                      em sua rotina de rastreamento veicular.
                    </p>
                  </div>
                </div>

                {/* Bases Legais */}
                <div>
                  <h4 className="font-semibold text-slate-800 text-base mb-2 flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                    Bases Legais
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">
                    O tratamento de dados somente ocorre mediante fundamento legal expressamente
                    previsto na LGPD:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {[
                      "Consentimento do titular",
                      "Cumprimento de obrigação legal",
                      "Execução de contrato",
                      "Legítimo interesse",
                      "Proteção da vida e integridade física",
                      "Proteção do crédito",
                      "Demais hipóteses legais",
                    ].map((base) => (
                      <span
                        key={base}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        ✓ {base}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Princípios Aplicáveis */}
                <div>
                  <h4 className="font-semibold text-slate-800 text-base mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Princípios Aplicáveis
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">
                    O tratamento de dados na BV Tracker observa rigorosamente os princípios da:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                    {[
                      "Finalidade",
                      "Adequação",
                      "Necessidade",
                      "Livre acesso",
                      "Qualidade dos dados",
                      "Transparência",
                      "Segurança",
                      "Prevenção",
                      "Não discriminação",
                      "Responsabilização e prestação de contas",
                    ].map((principio) => (
                      <div
                        key={principio}
                        className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium"
                      >
                        • {principio}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cookies */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="font-semibold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    Cookies e Tecnologias de Navegação
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Cookies são pequenos arquivos armazenados no navegador do usuário para melhorar a
                    experiência de navegação. Utilizamos cookies estritamente necessários ao
                    funcionamento da plataforma e, quando aplicável, cookies de desempenho ou
                    funcionalidade, sempre com transparência e possibilidade de gestão pelo usuário
                    através de seu navegador.
                  </p>
                </div>
              </div>

              {/* 2.2 COLETA DE DADOS PESSOAIS */}
              <div id="sec-22" className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                    2.2
                  </span>
                  Coleta de Dados Pessoais
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  A coleta de dados ocorre em razão das atividades e relações operacionais e comerciais
                  estabelecidas pela BV Tracker com:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                  {[
                    "Clientes",
                    "Usuários de sistemas e apps",
                    "Funcionários",
                    "Candidatos a vagas",
                    "Diretores e sócios",
                    "Fornecedores",
                    "Parceiros comerciais",
                    "Órgãos públicos",
                  ].map((item) => (
                    <div
                      key={item}
                      className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 italic">
                  Os dados coletados variam conforme a finalidade e a natureza da relação estabelecida.
                </p>
              </div>

              {/* 2.3 USO DE PLATAFORMAS E TERCEIROS */}
              <div id="sec-23" className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                    2.3
                  </span>
                  Uso de Plataformas e Serviços de Terceiros
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  A BV Tracker poderá utilizar serviços de terceiros qualificados — como provedores de
                  tecnologia, servidores em nuvem de alta disponibilidade, operadoras de conectividade
                  M2M/telecomunicações, integração de sistemas ou ferramentas de comunicação —, sempre
                  exigindo estrita observância a medidas de segurança da informação e conformidade legal
                  com a LGPD.
                </p>
              </div>

              {/* 2.4 TRATAMENTO DE DADOS DE MENORES */}
              <div id="sec-24" className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                    2.4
                  </span>
                  Tratamento de Dados de Menores de Idade
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Nossos serviços são primordialmente direcionados a pessoas naturais civilmente
                  capazes e pessoas jurídicas. Em situações específicas onde eventualmente ocorra o
                  tratamento de dados de menores de idade, este será realizado:
                </p>
                <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <li>Mediante base legal adequada;</li>
                  <li>Com autorização ou consentimento do responsável legal quando exigido por lei;</li>
                  <li>Com proteção reforçada e cuidados específicos quanto à confidencialidade.</li>
                </ul>
              </div>

              {/* 2.5 SEGURANÇA DA INFORMAÇÃO */}
              <div id="sec-25" className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                    2.5
                  </span>
                  Segurança da Informação
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Adotamos medidas técnicas, organizacionais e administrativas robustas para proteger
                  os dados pessoais contra acesso não autorizado, vazamentos, perda, alteração,
                  destruição indevida ou qualquer tratamento inadequado ou ilícito.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                  {[
                    { title: "Controle de Acesso", desc: "Acessos restritos com autenticação segura" },
                    { title: "Firewalls & Rede", desc: "Proteção de borda e monitoramento contra intrusões" },
                    { title: "Antivírus & Patches", desc: "Sistemas atualizados e defesa ativa" },
                    { title: "Criptografia", desc: "Tráfego seguro em trânsito e em repouso" },
                    { title: "Monitoramento", desc: "Auditoria contínua de integridade dos servidores" },
                    { title: "Políticas Internas", desc: "Governança e termos de sigilo para colaboradores" },
                  ].map((medida) => (
                    <div
                      key={medida.title}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <p className="font-bold text-sm text-slate-900">{medida.title}</p>
                      <p className="text-xs text-slate-500 mt-1">{medida.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2.6 DIREITOS DOS TITULARES */}
              <div id="sec-26" className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                    2.6
                  </span>
                  Direitos dos Titulares
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Nos termos do art. 18 da LGPD, o titular de dados pessoais pode exercer os
                  seguintes direitos perante a BV Tracker:
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
                  {[
                    "Confirmação da existência de tratamento",
                    "Acesso aos dados coletados",
                    "Correção de dados incompletos ou desatualizados",
                    "Portabilidade dos dados a outro prestador",
                    "Eliminação de dados tratados em desacordo",
                    "Anonimização ou bloqueio de dados excessivos",
                    "Revogação do consentimento concedido",
                    "Informações sobre compartilhamento com parceiros",
                  ].map((direito) => (
                    <div
                      key={direito}
                      className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{direito}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  As solicitações poderão ser realizadas por meio dos canais oficiais disponibilizados
                  pela organização. O prazo para resposta observará os limites legais estabelecidos pela
                  ANPD.
                </p>
              </div>

              {/* 2.7 DEVERES DOS TITULARES */}
              <div id="sec-27" className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                    2.7
                  </span>
                  Deveres dos Titulares
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  O titular compromete-se a colaborar com a segurança geral de suas informações:
                </p>
                <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <li>Fornecer informações cadastrais verdadeiras e exatas;</li>
                  <li>Manter seus dados cadastrais e de contato devidamente atualizados;</li>
                  <li>
                    Utilizar os sistemas, plataformas web e aplicativos móveis de forma responsável e
                    adequada;
                  </li>
                  <li>
                    Guardar o sigilo de suas senhas e credenciais de acesso, não as compartilhando com
                    terceiros;
                  </li>
                  <li>Respeitar os direitos de terceiros ao utilizar as ferramentas.</li>
                </ul>
              </div>

              {/* 2.8 CANAIS DE CONTATO */}
              <div id="sec-28" className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-blue-600 font-mono text-sm bg-blue-50 px-2 py-0.5 rounded">
                    2.8
                  </span>
                  Canais de Contato
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Para exercer seus direitos de titular, enviar dúvidas, solicitações ou comunicações
                  relacionadas à privacidade e proteção de dados, utilize nossos canais oficiais de
                  atendimento:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                  <a
                    href="mailto:rastreamentobvtracker@gmail.com"
                    className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-white group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        E-mail de Privacidade / Suporte
                      </p>
                      <p className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-blue-700 transition-colors">
                        rastreamentobvtracker@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5517991364360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-white group-hover:bg-emerald-600 group-hover:text-white transition-colors text-emerald-600 shadow-xs">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        WhatsApp / Telefone
                      </p>
                      <p className="font-bold text-slate-900 text-sm mt-0.5 group-hover:text-emerald-700 transition-colors">
                        (17) 99136-4360
                      </p>
                    </div>
                  </a>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white text-blue-600 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        Endereço
                      </p>
                      <p className="font-medium text-slate-800 text-xs sm:text-sm mt-0.5">
                        Av. José Zancaner, 40, Catiguá - SP, CEP 15870-000
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-white text-blue-600 shadow-xs">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        Horário de Atendimento
                      </p>
                      <p className="font-medium text-slate-800 text-xs sm:text-sm mt-0.5">
                        De segunda a sábado, das 7h às 18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2.9 CLÁUSULA DE RASTREAMENTO POR GEOLOCALIZAÇÃO */}
              <div
                id="sec-29"
                className="scroll-mt-32 mt-8 pt-6 border-t border-slate-100 space-y-4"
              >
                <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg border border-blue-800 relative overflow-hidden">
                  <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none p-4">
                    <Navigation className="w-40 h-40" />
                  </div>

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-2 text-blue-300 text-xs font-bold uppercase tracking-wider">
                      <Radio className="w-4 h-4 animate-pulse text-blue-400" />
                      Cláusula Específica de Rastreamento
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      2.9 Cláusula de Rastreamento por Geolocalização
                    </h3>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      Por tratar-se da prestação de serviços de rastreamento veicular, telemetria e
                      gestão de frotas pela <strong>BV Tracker</strong>:
                    </p>

                    <div className="space-y-3 pt-1">
                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-100">
                          <strong>Dados Coletados:</strong> Poderão ser coletados dados de latitude,
                          longitude, velocidade, ignição e horário;
                        </p>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-100">
                          <strong>Finalidade Exclusiva:</strong> Os dados serão utilizados
                          exclusivamente para a prestação do serviço contratado de proteção, segurança
                          e monitoramento veicular;
                        </p>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-100">
                          <strong>Não Compartilhamento:</strong> Não haverá compartilhamento com
                          terceiros sem autorização do cliente, salvo nos termos da lei ou mediante
                          ordem judicial;
                        </p>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-100">
                          <strong>Tempo de Guarda:</strong> Os dados serão armazenados de forma
                          segura pelo período necessário à execução do serviço e cumprimento de
                          obrigações contratuais e regulatórias;
                        </p>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-100">
                          <strong>Direitos do Titular:</strong> O cliente poderá solicitar exclusão ou
                          revogação do consentimento, observados os limites legais e contratuais.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SEÇÃO 3: ALTERAÇÕES NA POLÍTICA */}
            <section
              id="sec-3"
              className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                  3
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Alterações na Política</h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Esta Política poderá ser alterada a qualquer tempo para adequação a mudanças legais,
                  atualizações regulatórias, evolução tecnológica e melhorias internas de governança.
                </p>
                <p>
                  A versão vigente estará sempre disponível nos canais oficiais e no site da{" "}
                  <strong>BV Tracker</strong>.
                </p>
              </div>
            </section>

            {/* SEÇÃO 4: DISPOSIÇÕES FINAIS */}
            <section
              id="sec-4"
              className="scroll-mt-32 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm">
                  4
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Disposições Finais</h2>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  O compromisso com a proteção de dados é parte essencial da nossa atuação. A
                  conformidade com boas práticas legais e éticas fortalece os relacionamentos, promove
                  confiança e assegura o respeito aos direitos fundamentais de todos os nossos clientes
                  e usuários.
                </p>
                <p className="font-semibold text-slate-800">
                  Todos os envolvidos em nossas operações estão comprometidos com a observância desta
                  Política.
                </p>
              </div>

              {/* Botão Voltar ao Topo */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-semibold transition-all shadow-sm"
                >
                  <ArrowUp className="w-4 h-4" />
                  Voltar ao topo
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
