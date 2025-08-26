export default function AdminAside() {
    return (
        <aside
            id="sidebar"
            className="fixed top-16 left-0 bottom-0 w-64 bg-white shadow-sm transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-20 overflow-y-auto scrollbar-hide"
        >
            <div className="p-4">
                {/* <!-- 主导航菜单 --> */}
                <nav className="space-y-1">
                    <p
                        className="text-xs font-semibold text-dark-light uppercase tracking-wider mb-2 px-3"
                    >
                        主导航
                    </p>
                    <a
                        href="javascript:void(0);"
                        className="sidebar-item-active flex items-center px-3 py-3 text-sm font-medium rounded-lg"
                    >
                        <i className="fas fa-tachometer-alt w-5 h-5 mr-3"> </i>
                        <span> 仪表盘 </span>
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-file-alt w-5 h-5 mr-3"> </i>
                        <span> 我的表单 </span>
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-chart-bar w-5 h-5 mr-3"> </i>
                        <span> 数据分析 </span>
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-users w-5 h-5 mr-3"> </i>
                        <span> 团队管理 </span>
                    </a>
                </nav>
                {/* <!-- 表单类型导航 --> */}
                <nav className="space-y-1 mt-8">
                    <p
                        className="text-xs font-semibold text-dark-light uppercase tracking-wider mb-2 px-3"
                    >
                        表单类型
                    </p>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-list-check w-5 h-5 mr-3"> </i>
                        <span> 调查问卷 </span>
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-star-half-alt w-5 h-5 mr-3"> </i>
                        <span> 满意度评价 </span>
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-clipboard-check w-5 h-5 mr-3"> </i>
                        <span> 报名表单 </span>
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-comment-dots w-5 h-5 mr-3"> </i>
                        <span> 反馈收集 </span>
                    </a>
                </nav>
                {/* <!-- 系统设置 --> */}
                <nav className="space-y-1 mt-8">
                    <p
                        className="text-xs font-semibold text-dark-light uppercase tracking-wider mb-2 px-3"
                    >
                        系统
                    </p>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-cog w-5 h-5 mr-3"> </i>
                        <span> 设置 </span>
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="flex items-center px-3 py-3 text-sm font-medium text-dark-light hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                        <i className="fas fa-question-circle w-5 h-5 mr-3"> </i>
                        <span> 帮助中心 </span>
                    </a>
                </nav>
            </div>
            {/* <!-- 升级提示 --> */}
            <div
                className="mt-6 p-4 mx-4 bg-primary/5 rounded-xl border border-primary/20"
            >
                <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <i className="fas fa-rocket text-primary"> </i>
                    </div>
                    <div className="ml-3">
                        <h4 className="text-sm font-semibold text-primary">升级到专业版</h4>
                        <p className="text-xs text-dark-light mt-1">
                            解锁更多高级功能和无限制表单创建
                        </p>
                        <button
                            className="mt-2 text-xs bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                        >
                            立即升级
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}