import { auth } from "@/auth"

export default async function AdminHeader() {
    const session = await auth();
    return (
        <header
            className="bg-white shadow-sm fixed top-0 left-0 right-0 z-30 transition-all duration-300"
            id="main-header"
        >
            <div className="flex items-center justify-between px-4 lg:px-6 h-16">
                {/* <!-- 左侧Logo和汉堡菜单 --> */}
                <div className="flex items-center">
                    <button
                        id="sidebar-toggle"
                        className="p-2 rounded-md lg:hidden text-dark-light hover:bg-gray-100 focus:outline-none"
                    >
                        <i className="fas fa-bars text-lg"> </i>
                    </button>
                    <a href="javascript:void(0);" className="flex items-center ml-3 lg:ml-0">
                        <div
                            className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white"
                        >
                            <i className="fas fa-comment-dots"> </i>
                        </div>
                        <span className="ml-2 text-xl font-semibold text-primary">
                            Feedora
                        </span>
                    </a>
                </div>
                {/* <!-- 右侧用户信息和通知 --> */}
                <div className="flex items-center space-x-4">
                    {/* <!-- 搜索框 --> */}
                    <div className="hidden md:flex items-center relative">
                        <input
                            type="text"
                            placeholder="搜索表单..."
                            className="pl-10 pr-4 py-2 rounded-lg border border-gray-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary w-64 text-sm"
                        />
                        <i className="fas fa-search absolute left-3 text-dark-light"> </i>
                    </div>
                    {/* <!-- 通知图标 --> */}
                    <button
                        className="relative p-2 rounded-full text-dark-light hover:bg-gray-100 focus:outline-none"
                    >
                        <i className="fas fa-bell text-lg"> </i>
                        <span
                            className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"
                        >
                        </span>
                    </button>
                    {/* <!-- 用户头像 --> */}
                    <div className="relative group">
                        <button className="flex items-center focus:outline-none">
                            <img
                                src={session?.user?.image || ""}
                                alt="用户头像"
                                className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
                            />
                            <span className="hidden md:block ml-2 text-sm font-medium">
                                {session?.user?.name}
                            </span>
                            <i
                                className="fas fa-chevron-down ml-1 text-xs text-dark-light hidden md:block"
                            >
                            </i>
                        </button>
                        {/* <!-- 用户下拉菜单 --> */}
                        <div
                            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100"
                        >
                            <a
                                href="javascript:void(0);"
                                className="block px-4 py-2 text-sm text-dark hover:bg-gray-100"
                            >
                                <i className="fas fa-user mr-2 text-dark-light"> </i>
                                个人资料
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="block px-4 py-2 text-sm text-dark hover:bg-gray-100"
                            >
                                <i className="fas fa-cog mr-2 text-dark-light"> </i>
                                设置
                            </a>
                            <div className="border-t border-gray-100 my-1"></div>
                            <a
                                href="javascript:void(0);"
                                className="block px-4 py-2 text-sm text-danger hover:bg-gray-100"
                            >
                                <i className="fas fa-sign-out-alt mr-2"> </i>
                                退出登录
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}