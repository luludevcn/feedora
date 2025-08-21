import Footer from "@/components/footer"
import Header from "@/components/header"
import { LoginForm } from "@/components/login-form"

export default function Page() {

  return (
    <>
      <Header></Header>
      <div className="flex w-full items-center justify-center my-10 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
