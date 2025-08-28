import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      {/* <!-- Hero Section --> */}
      <section className='pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center'>
            <div className='lg:w-1/2 mb-12 lg:mb-0'>
              <div className='inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
                The future of feedback collection is here
              </div>
              <h1 className='text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-6 text-shadow'>
                Gather insights
                <span className='bg-gradient-to-r from-primary ml-2 to-secondary bg-clip-text text-transparent'>
                  like never before
                </span>
              </h1>
              <p className='text-lg md:text-xl text-gray-600 mb-8 max-w-lg'>
                {`Create stunning surveys, collect real-time feedback, and turn insights into action with Feedora's powerful yet intuitive platform.`}
              </p>
              <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
                <a href='javascript:void(0);' className='bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center'>
                  Start Free Trial
                </a>
                <a href='javascript:void(0);' className='flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-md hover:shadow-lg text-center'>
                  <i className='fas fa-play-circle text-primary'>
                  </i>
                  <span >
                    Watch Demo
                  </span>
                </a>
              </div>
              <div className='mt-10 flex items-center'>
                <div className='flex -space-x-3'>
                  <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/f904a25c3513f42c79c2991f9c0bda6a.png' alt='User' className='w-10 h-10 rounded-full border-2 border-white' />
                  <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/f904a25c3513f42c79c2991f9c0bda6a.png' alt='User' className='w-10 h-10 rounded-full border-2 border-white' />
                  <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/f904a25c3513f42c79c2991f9c0bda6a.png' alt='User' className='w-10 h-10 rounded-full border-2 border-white' />
                  <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/f904a25c3513f42c79c2991f9c0bda6a.png' alt='User' className='w-10 h-10 rounded-full border-2 border-white' />
                </div>
                <div className='ml-4'>
                  <div className='flex items-center'>
                    <div className='flex text-yellow-400'>
                      <i className='fas fa-star'>
                      </i>
                      <i className='fas fa-star'>
                      </i>
                      <i className='fas fa-star'>
                      </i>
                      <i className='fas fa-star'>
                      </i>
                      <i className='fas fa-star-half-alt'>
                      </i>
                    </div>
                    <span className='ml-2 font-semibold'>
                      4.9/5
                    </span>
                  </div>
                  <p className='text-sm text-gray-500'>
                    From 2,000+ happy customers
                  </p>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 relative'>
              <div className='relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500'>
                <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/82b3fe344415255b43b094508c7eda14.png' alt='Feedora Dashboard' className='w-full h-auto' />
                <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6'>
                  <div className='flex items-center space-x-2 text-white'>
                    <i className='fas fa-check-circle text-secondary'>
                    </i>
                    <span className='font-medium'>
                      Real-time feedback analytics
                    </span>
                  </div>
                </div>
              </div>
              <div className='absolute -bottom-6 -left-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl'>
              </div>
              <div className='absolute -top-6 -right-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl'>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Trusted By Section --> */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <p className='text-center text-gray-500 text-sm font-medium mb-10'>
            Trusted by innovative companies worldwide
          </p>
          <div className='flex flex-wrap justify-center items-center gap-12 opacity-70'>
            <div className='text-2xl font-bold text-gray-400'>
              Company A
            </div>
            <div className='text-2xl font-bold text-gray-400'>
              Company B
            </div>
            <div className='text-2xl font-bold text-gray-400'>
              Company C
            </div>
            <div className='text-2xl font-bold text-gray-400'>
              Company D
            </div>
            <div className='text-2xl font-bold text-gray-400'>
              Company E
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Features Section --> */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6'>
              Powerful Features
            </div>
            <h2 className='text-[clamp(1.8rem,4vw,3rem)] font-bold mb-6'>
              Everything you need to collect and analyze feedback
            </h2>
            <p className='text-lg text-gray-600'>
              Our comprehensive toolset helps you create, distribute, and analyze surveys with ease, giving you the insights you need to make informed decisions.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* <!-- Feature Card 1 --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl mb-6'>
                <i className='fas fa-pencil-alt'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Intuitive Survey Builder
              </h3>
              <p className='text-gray-600 mb-4'>
                Create beautiful surveys in minutes with our drag-and-drop builder. No coding required.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Feature Card 2 --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-6'>
                <i className='fas fa-chart-line'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Real-time Analytics
              </h3>
              <p className='text-gray-600 mb-4'>
                Track responses as they come in with our live dashboard and powerful visualization tools.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Feature Card 3 --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl mb-6'>
                <i className='fas fa-users'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Audience Targeting
              </h3>
              <p className='text-gray-600 mb-4'>
                Segment your audience and target specific groups to get the most relevant feedback.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Feature Card 4 --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl mb-6'>
                <i className='fas fa-bell'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Smart Notifications
              </h3>
              <p className='text-gray-600 mb-4'>
                Get instant alerts when new responses come in or when survey goals are met.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Feature Card 5 --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl mb-6'>
                <i className='fas fa-file-export'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Advanced Reporting
              </h3>
              <p className='text-gray-600 mb-4'>
                Generate detailed reports and export data in multiple formats for further analysis.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
            {/* <!-- Feature Card 6 --> */}
            <div className='bg-white rounded-2xl p-8 shadow-md card-hover'>
              <div className='w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl mb-6'>
                <i className='fas fa-shield-alt'>
                </i>
              </div>
              <h3 className='text-xl font-bold mb-3'>
                Enterprise Security
              </h3>
              <p className='text-gray-600 mb-4'>
                Rest easy knowing your data is protected with enterprise-grade security and compliance.
              </p>
              <a href='javascript:void(0);' className='inline-flex items-center text-primary font-medium hover:underline'>
                Learn more
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Dashboard Preview Section --> */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='lg:w-1/2 order-2 lg:order-1'>
              <div className='relative'>
                <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500'>
                  <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/2c74c05096948e6399161272a02dd916.png' alt='Feedora Dashboard' className='w-full h-auto' />
                </div>
                <div className='absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl'>
                </div>
                <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl'>
                </div>
              </div>
            </div>
            <div className='lg:w-1/2 order-1 lg:order-2'>
              <div className='inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6'>
                Data-driven decisions
              </div>
              <h2 className='text-[clamp(2rem,4vw,3rem)] font-bold mb-6'>
                Turn feedback into actionable insights
              </h2>
              <p className='text-lg text-gray-600 mb-8'>
                Our powerful analytics dashboard gives you real-time visibility into survey results, helping you identify trends and make informed decisions quickly.
              </p>
              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 mt-1 flex-shrink-0'>
                    <i className='fas fa-check'>
                    </i>
                  </div>
                  <div >
                    <h3 className='text-lg font-semibold mb-1'>
                      Advanced Visualization
                    </h3>
                    <p className='text-gray-600'>
                      Interactive charts and graphs that make complex data easy to understand.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 mt-1 flex-shrink-0'>
                    <i className='fas fa-check'>
                    </i>
                  </div>
                  <div >
                    <h3 className='text-lg font-semibold mb-1'>
                      Sentiment Analysis
                    </h3>
                    <p className='text-gray-600'>
                      Automatically detect positive, negative, and neutral responses in open-ended answers.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4 mt-1 flex-shrink-0'>
                    <i className='fas fa-check'>
                    </i>
                  </div>
                  <div >
                    <h3 className='text-lg font-semibold mb-1'>
                      Custom Reports
                    </h3>
                    <p className='text-gray-600'>
                      Create and share custom reports with stakeholders in multiple formats.
                    </p>
                  </div>
                </div>
              </div>
              <a href='javascript:void(0);' className='inline-flex items-center mt-8 text-primary font-medium hover:underline'>
                Explore Analytics
                <i className='fas fa-arrow-right ml-2 text-sm'>
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Templates Section --> */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6'>
              Ready-to-use templates
            </div>
            <h2 className='text-[clamp(2rem,4vw,3rem)] font-bold mb-6'>
              Start fast with professional templates
            </h2>
            <p className='text-lg text-gray-600'>
              Choose from over 100 professionally designed templates for every use case, or start from scratch.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* <!-- Template Card 1 --> */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/75a1fea963c9d590da54dce38f54fa75.png' alt='Customer Satisfaction Template' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-sm font-medium text-gray-500'>
                    Customer Feedback
                  </span>
                  <span className='px-3 py-1 bg-green-100 text-green-600 text-xs rounded-full'>
                    Popular
                  </span>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Customer Satisfaction
                </h3>
                <p className='text-gray-600 mb-4'>
                  Measure customer satisfaction and identify areas for improvement.
                </p>
                <a href='javascript:void(0);' className='block text-center bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-medium transition-colors'>
                  Use Template
                </a>
              </div>
            </div>
            {/* <!-- Template Card 2 --> */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/dbfca1a96c35c9e9c4bcf6c916dc81b1.png' alt='Employee Engagement Template' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-sm font-medium text-gray-500'>
                    HR & Team
                  </span>
                  <span className='px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full'>
                    New
                  </span>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Employee Engagement
                </h3>
                <p className='text-gray-600 mb-4'>
                  Understand employee satisfaction and boost team engagement.
                </p>
                <a href='javascript:void(0);' className='block text-center bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-medium transition-colors'>
                  Use Template
                </a>
              </div>
            </div>
            {/* <!-- Template Card 3 --> */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-md card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/e5c6539c45189e17ea13936f40ebc2ee.png' alt='Product Feedback Template' className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-center mb-3'>
                  <span className='text-sm font-medium text-gray-500'>
                    Product Development
                  </span>
                  <span className='px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full'>
                    Pro
                  </span>
                </div>
                <h3 className='text-xl font-bold mb-2'>
                  Product Feedback
                </h3>
                <p className='text-gray-600 mb-4'>
                  Gather insights to improve your product and prioritize features.
                </p>
                <a href='javascript:void(0);' className='block text-center bg-gray-50 hover:bg-gray-100 text-gray-800 py-3 rounded-xl font-medium transition-colors'>
                  Use Template
                </a>
              </div>
            </div>
          </div>
          <div className='text-center mt-12'>
            <a href='javascript:void(0);' className='inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg'>
              <span >
                View All Templates
              </span>
              <i className='fas fa-arrow-right'>
              </i>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- Testimonials Section --> */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <div className='inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6'>
              Success stories
            </div>
            <h2 className='text-[clamp(2rem,4vw,3rem)] font-bold mb-6'>
              What our customers are saying
            </h2>
            <p className='text-lg text-gray-600'>
              Join thousands of companies using Feedora to transform feedback into action.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* <!-- Testimonial 1 --> */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-md'>
              <div className='flex text-yellow-400 mb-4'>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
              </div>
              <p className='text-gray-600 mb-6 italic'>
                {`"Feedora has completely transformed how we collect and act on customer feedback. The analytics tools give us insights we never had before."`}
              </p>
              <div className='flex items-center'>
                <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/cca584a063cbe29e864107221890b540.png' alt='Sarah Johnson' className='w-12 h-12 rounded-full mr-4' />
                <div >
                  <h4 className='font-bold'>
                    Sarah Johnson
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Product Manager, TechCorp
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial 2 --> */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-md'>
              <div className='flex text-yellow-400 mb-4'>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
              </div>
              <p className='text-gray-600 mb-6 italic'>
                {`"The survey builder is incredibly intuitive, and we've seen a 40% increase in response rates since switching to Feedora. Highly recommended!"`}
              </p>
              <div className='flex items-center'>
                <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/1bc38dbba5ad421e255f9df976b9ade7.png' alt='Michael Chen' className='w-12 h-12 rounded-full mr-4' />
                <div >
                  <h4 className='font-bold'>
                    Michael Chen
                  </h4>
                  <p className='text-sm text-gray-500'>
                    Marketing Director, RetailCo
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Testimonial 3 --> */}
            <div className='bg-gray-50 rounded-2xl p-8 shadow-md'>
              <div className='flex text-yellow-400 mb-4'>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star'>
                </i>
                <i className='fas fa-star-half-alt'>
                </i>
              </div>
              <p className='text-gray-600 mb-6 italic'>
                {`"As an HR professional, I love how easy it is to create and distribute employee surveys. The reporting features save me hours of work every month."`}
              </p>
              <div className='flex items-center'>
                <img src='https://design.gemcoder.com/staticResource/echoAiSystemImages/90000ea936321b61913a8e9a34a58c5b.png' alt='Jennifer Williams' className='w-12 h-12 rounded-full mr-4' />
                <div >
                  <h4 className='font-bold'>
                    Jennifer Williams
                  </h4>
                  <p className='text-sm text-gray-500'>
                    HR Director, HealthPlus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- CTA Section --> */}
      <section className='py-24 bg-gradient-primary relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzIgMzJjNC40IDEuNyA4LjQgMiAxCMyOS42IDM3LjcgMjggNDBjLTUuMyAzLjMgLTEwLjcgNS0xNiA1cy0xMC43LTEuNy0xNi01Yy00LjQgMi4zLTguNCA0LTEyIDRzLTcuNi0xLjctMTItNHYzMnptLTE2IDBIMHYtMjRjMC01LjMgNC43LTEwIDEwLTEwcS44IDAgMS41LjMgMi4xLjdsMi4zIDIuM2MuNi42IDEuNCAxIDEuOSAxLjlsMi45IDIuOWMxLjIgMS4yIDEuMiAzLjEgMCA0LjNsLTIuOSAyLjljLS42LjYtMS40IDEtMiAxLjlsLTIuMyAyLjNjLS42LjYtMS4zLjktMi4xLjlINHYtMjRjMC01LjMgNC43LTEwIDEwLTEwcS44IDAgMS41LjMgMi4xLjdsMi4zIDIuM2MuNi42IDEuNCAxIDEuOSAxLjlsMi45IDIuOWMxLjIgMS4yIDEuMiAzLjEgMCA0LjNsLTIuOSAyLjljLS42LjYtMS40IDEtMiAxLjlsLTIuMyAyLjNjLS42LjYtMS4zLjktMi4xLjlINHYtMjRjMC01LjMgNC43LTEwIDEwLTEwcS44IDAgMS41LjMgMi4xLjdsMi4zIDIuM2MuNi42IDEuNCAxIDEuOSAxLjlsMi45IDIuOWMxLjIgMS4yIDEuMiAzLjEgMCA0LjNsLTIuOSAyLjljLS42LjYtMS40IDEtMiAxLjlsLTIuMyAyLjNjLS42LjYtMS4zLjktMi4xLjlINHYtMjRjMC01LjMgNC43LTEwIDEwLTEwIi8+PC9nPjwvZz48L3N2Zz4=")] opacity-20'>
          </div>
        </div>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-6 leading-tight'>
              Ready to transform your feedback process?
            </h2>
            <p className='text-xl text-white/80 mb-10'>
              Join thousands of companies using Feedora to gather insights and make better decisions.
            </p>
            <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <a href='javascript:void(0);' className='bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center'>
                Start Free Trial
              </a>
              <a href='javascript:void(0);' className='flex items-center justify-center space-x-2 bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all text-center'>
                <i className='fas fa-calendar-alt'>
                </i>
                <span >
                  Schedule Demo
                </span>
              </a>
            </div>
            <p className='text-white/60 mt-6 text-sm'>
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}