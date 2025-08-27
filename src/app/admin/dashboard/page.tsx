import { auth } from "@/auth";
import Script from "next/script";


export default async function Page() {
  // const session = await auth();
  // console.log(session);
  return (
    <>
      {/* <!-- 主内容 --> */}
      <main
        className="flex-1 lg:ml-64 transition-all duration-300 pt-6 pb-12 px-4 lg:px-8"
      >
        <Script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.4.3/echarts.min.js"></Script>
        {/* <!-- 页面标题和操作按钮 --> */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-8"
        >
          <div>
            <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-dark">
              仪表盘
            </h1>
            <p className="text-dark-light mt-1">欢迎回来！这里是您的表单数据概览</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button
              className="btn-secondary flex items-center"
              id="create-form-btn"
            >
              <i className="fas fa-plus mr-2"> </i>
              创建表单
            </button>
            <button className="btn-secondary flex items-center">
              <i className="fas fa-download mr-2"> </i>
              导出数据
            </button>
          </div>
        </div>
        {/* <!-- 数据概览卡片 --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* <!-- 总表单数 --> */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dark-light text-sm font-medium">总表单数</p>
                <h3 className="text-2xl font-bold mt-1">24</h3>
                <p className="text-secondary text-xs flex items-center mt-2">
                  <i className="fas fa-arrow-up mr-1"> </i>
                  12%
                  <span className="text-dark-light ml-1"> 较上月 </span>
                </p>
              </div>
              <div className="bg-primary/10 p-3 rounded-lg">
                <i className="fas fa-file-alt text-primary text-xl"> </i>
              </div>
            </div>
          </div>
          {/* <!-- 总提交数 --> */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dark-light text-sm font-medium">总提交数</p>
                <h3 className="text-2xl font-bold mt-1">1,284</h3>
                <p className="text-secondary text-xs flex items-center mt-2">
                  <i className="fas fa-arrow-up mr-1"> </i>
                  24%
                  <span className="text-dark-light ml-1"> 较上月 </span>
                </p>
              </div>
              <div className="bg-secondary/10 p-3 rounded-lg">
                <i className="fas fa-check-circle text-secondary text-xl"> </i>
              </div>
            </div>
          </div>
          {/* <!-- 平均完成率 --> */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dark-light text-sm font-medium">平均完成率</p>
                <h3 className="text-2xl font-bold mt-1">68%</h3>
                <p className="text-danger text-xs flex items-center mt-2">
                  <i className="fas fa-arrow-down mr-1"> </i>
                  3%
                  <span className="text-dark-light ml-1"> 较上月 </span>
                </p>
              </div>
              <div className="bg-warning/10 p-3 rounded-lg">
                <i className="fas fa-chart-pie text-warning text-xl"> </i>
              </div>
            </div>
          </div>
          {/* <!-- 总访问量 --> */}
          <div className="card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dark-light text-sm font-medium">总访问量</p>
                <h3 className="text-2xl font-bold mt-1">5,732</h3>
                <p className="text-secondary text-xs flex items-center mt-2">
                  <i className="fas fa-arrow-up mr-1"> </i>
                  18%
                  <span className="text-dark-light ml-1"> 较上月 </span>
                </p>
              </div>
              <div className="bg-danger/10 p-3 rounded-lg">
                <i className="fas fa-eye text-danger text-xl"> </i>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 图表区域 --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* <!-- 提交趋势图表 --> */}
          <div className="card lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">提交趋势</h2>
              <div className="flex space-x-2">
                <button
                  className="text-xs bg-gray-100 text-dark px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  周
                </button>
                <button
                  className="text-xs bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  月
                </button>
                <button
                  className="text-xs bg-gray-100 text-dark px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  年
                </button>
              </div>
            </div>
            <div id="submission-trend-chart" className="w-full h-80"></div>
          </div>
          {/* <!-- 表单类型分布 --> */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">表单类型分布</h2>
              <button className="text-dark-light hover:text-dark">
                <i className="fas fa-ellipsis-v"> </i>
              </button>
            </div>
            <div id="form-type-chart" className="w-full h-80"></div>
          </div>
        </div>
        {/* <!-- 最近表单和快速访问 --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* <!-- 最近创建的表单 --> */}
          <div className="card lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">最近创建的表单</h2>
              <a
                href="javascript:void(0);"
                className="text-primary text-sm hover:underline"
              >
                查看全部
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-dark-light uppercase tracking-wider"
                    >
                      表单名称
                    </th>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-dark-light uppercase tracking-wider"
                    >
                      类型
                    </th>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-dark-light uppercase tracking-wider"
                    >
                      提交数
                    </th>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-dark-light uppercase tracking-wider"
                    >
                      创建日期
                    </th>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-dark-light uppercase tracking-wider"
                    >
                      状态
                    </th>
                    <th
                      className="px-4 py-3 text-right text-xs font-medium text-dark-light uppercase tracking-wider"
                    >
                      操作
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <i className="fas fa-list-check text-blue-500"> </i>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-dark">
                            客户满意度调查
                          </div>
                          <div className="text-xs text-dark-light">
                            ID: F-2023-001
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-light"> 调查问卷 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-dark"> 128 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-light"> 2023-11-15 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800"
                      >
                        已发布
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        编辑
                      </button>
                      <button className="text-dark-light hover:text-dark mr-3">
                        查看
                      </button>
                      <button className="text-danger hover:text-danger/80">
                        删除
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="bg-purple-100 p-2 rounded-lg mr-3">
                          <i className="fas fa-clipboard-check text-purple-500">
                          </i>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-dark">
                            产品反馈收集
                          </div>
                          <div className="text-xs text-dark-light">
                            ID: F-2023-002
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-light"> 反馈收集 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-dark"> 84 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-light"> 2023-11-10 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800"
                      >
                        已发布
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        编辑
                      </button>
                      <button className="text-dark-light hover:text-dark mr-3">
                        查看
                      </button>
                      <button className="text-danger hover:text-danger/80">
                        删除
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="bg-orange-100 p-2 rounded-lg mr-3">
                          <i className="fas fa-star-half-alt text-orange-500"> </i>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-dark">
                            员工满意度评价
                          </div>
                          <div className="text-xs text-dark-light">
                            ID: F-2023-003
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-light"> 满意度评价 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-dark"> 56 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-light"> 2023-11-05 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800"
                      >
                        已发布
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        编辑
                      </button>
                      <button className="text-dark-light hover:text-dark mr-3">
                        查看
                      </button>
                      <button className="text-danger hover:text-danger/80">
                        删除
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="bg-red-100 p-2 rounded-lg mr-3">
                          <i className="fas fa-users text-red-500"> </i>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-dark">
                            活动报名表单
                          </div>
                          <div className="text-xs text-dark-light">
                            ID: F-2023-004
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-light"> 报名表单 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm font-medium text-dark"> 0 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="text-sm text-dark-light"> 2023-11-01 </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800"
                      >
                        草稿
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                      <button className="text-primary hover:text-primary/80 mr-3">
                        编辑
                      </button>
                      <button className="text-dark-light hover:text-dark mr-3">
                        查看
                      </button>
                      <button className="text-danger hover:text-danger/80">
                        删除
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- 快速访问 --> */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">快速访问</h2>
              <button className="text-dark-light hover:text-dark">
                <i className="fas fa-plus"> </i>
              </button>
            </div>
            <div className="space-y-4">
              {/* <!-- 常用模板 --> */}
              <div>
                <h3 className="text-sm font-medium text-dark-light mb-3">
                  常用模板
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    className="flex flex-col items-center p-3 border border-gray-medium rounded-lg hover:border-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <i className="fas fa-list-check text-blue-500"> </i>
                    </div>
                    <span className="text-xs mt-2 text-center"> 调查问卷 </span>
                  </button>
                  <button
                    className="flex flex-col items-center p-3 border border-gray-medium rounded-lg hover:border-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <i className="fas fa-star-half-alt text-purple-500"> </i>
                    </div>
                    <span className="text-xs mt-2 text-center"> 满意度评价 </span>
                  </button>
                  <button
                    className="flex flex-col items-center p-3 border border-gray-medium rounded-lg hover:border-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    <div className="bg-green-100 p-2 rounded-lg">
                      <i className="fas fa-clipboard-check text-green-500"> </i>
                    </div>
                    <span className="text-xs mt-2 text-center"> 报名表单 </span>
                  </button>
                  <button
                    className="flex flex-col items-center p-3 border border-gray-medium rounded-lg hover:border-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    <div className="bg-red-100 p-2 rounded-lg">
                      <i className="fas fa-comment-dots text-red-500"> </i>
                    </div>
                    <span className="text-xs mt-2 text-center"> 反馈收集 </span>
                  </button>
                </div>
              </div>
              {/* <!-- 最近访问的表单 --> */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-dark-light mb-3">
                  最近访问
                </h3>
                <div className="space-y-3">
                  <a
                    href="javascript:void(0);"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <i className="fas fa-list-check text-blue-500"> </i>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-xs font-medium text-dark">
                        客户满意度调查
                      </h4>
                      <p className="text-xs text-dark-light">今天 14:30</p>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <i className="fas fa-clipboard-check text-purple-500"> </i>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-xs font-medium text-dark">
                        产品反馈收集
                      </h4>
                      <p className="text-xs text-dark-light">昨天 09:15</p>
                    </div>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <i className="fas fa-star-half-alt text-orange-500"> </i>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-xs font-medium text-dark">
                        员工满意度评价
                      </h4>
                      <p className="text-xs text-dark-light">11月10日</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- 创建表单模态框 --> */}
      <div
        id="create-form-modal"
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center opacity-0 invisible transition-all duration-300"
      >
        <div
          className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform scale-95 transition-all duration-300"
          id="modal-content"
        >
          <div
            className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10"
          >
            <h2 className="text-xl font-bold text-dark">创建新表单</h2>
            <button
              id="close-modal-btn"
              className="text-dark-light hover:text-dark focus:outline-none"
            >
              <i className="fas fa-times text-xl"> </i>
            </button>
          </div>
          <div className="p-6">
            {/* <!-- 表单基本信息 --> */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">基本信息</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label"> 表单标题 </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="输入表单标题"
                  />
                </div>
                <div>
                  <label className="form-label"> 表单类型 </label>
                  <select className="form-input">
                    <option value="">选择表单类型</option>
                    <option value="survey">调查问卷</option>
                    <option value="feedback">反馈收集</option>
                    <option value="registration">报名表单</option>
                    <option value="evaluation">满意度评价</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="form-label"> 表单描述 </label>
                  <textarea
                    className="form-input h-24"
                    placeholder="输入表单描述信息，告诉用户这个表单的用途..."
                  >
                  </textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="form-label"> 表单封面 </label>
                  <div className="mt-2 flex items-center justify-center w-full">
                    <label
                      className="flex flex-col w-full h-64 border-2 border-dashed border-gray-medium rounded-lg hover:bg-gray-50 cursor-pointer"
                    >
                      <div
                        className="flex flex-col items-center justify-center pt-10"
                      >
                        <i
                          className="fas fa-cloud-upload-alt text-3xl text-dark-light mb-3"
                        >
                        </i>
                        <p className="text-sm text-dark-light">
                          点击上传或拖放图片
                        </p>
                        <p className="text-xs text-dark-light mt-1">
                          支持 JPG, PNG, GIF (最大 5MB)
                        </p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 表单模板选择 --> */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">选择模板</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* <!-- 空白模板 --> */}
                <div
                  className="border border-primary rounded-xl overflow-hidden relative group cursor-pointer"
                >
                  <div
                    className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full"
                  >
                    推荐
                  </div>
                  <div
                    className="h-32 bg-gray-100 flex items-center justify-center"
                  >
                    <i className="fas fa-file-alt text-4xl text-dark-light"> </i>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-dark">空白模板</h4>
                    <p className="text-xs text-dark-light mt-1">
                      从空白开始创建自定义表单
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      className="w-full bg-primary/10 text-primary text-sm py-2 rounded-lg hover:bg-primary/20 transition-colors duration-200"
                    >
                      选择
                    </button>
                  </div>
                </div>
                {/* <!-- 客户满意度调查 --> */}
                <div
                  className="border border-gray-medium rounded-xl overflow-hidden relative group cursor-pointer hover:border-primary transition-colors duration-200"
                >
                  <div className="h-32 bg-gray-100">
                    <img
                      src="https://design.gemcoder.com/staticResource/echoAiSystemImages/b45d1fc1e49a93ce7bd61f02615e1da5.png"
                      alt="客户满意度调查模板"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-dark">客户满意度调查</h4>
                    <p className="text-xs text-dark-light mt-1">
                      评估客户对产品或服务的满意度
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      className="w-full bg-gray-100 text-dark text-sm py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      选择
                    </button>
                  </div>
                </div>
                {/* <!-- 员工反馈收集 --> */}
                <div
                  className="border border-gray-medium rounded-xl overflow-hidden relative group cursor-pointer hover:border-primary transition-colors duration-200"
                >
                  <div className="h-32 bg-gray-100">
                    <img
                      src="https://design.gemcoder.com/staticResource/echoAiSystemImages/3177850c71ee29f417f3091e668d3794.png"
                      alt="员工反馈收集模板"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-dark">员工反馈收集</h4>
                    <p className="text-xs text-dark-light mt-1">
                      收集员工对工作环境的反馈
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      className="w-full bg-gray-100 text-dark text-sm py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      选择
                    </button>
                  </div>
                </div>
                {/* <!-- 活动报名表单 --> */}
                <div
                  className="border border-gray-medium rounded-xl overflow-hidden relative group cursor-pointer hover:border-primary transition-colors duration-200"
                >
                  <div className="h-32 bg-gray-100">
                    <img
                      src="https://design.gemcoder.com/staticResource/echoAiSystemImages/db4b3ac3e577f9f73d3fa72aa327d181.png"
                      alt="活动报名表单模板"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-dark">活动报名表单</h4>
                    <p className="text-xs text-dark-light mt-1">
                      用于活动参与者的报名登记
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      className="w-full bg-gray-100 text-dark text-sm py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      选择
                    </button>
                  </div>
                </div>
                {/* <!-- 产品评价表单 --> */}
                <div
                  className="border border-gray-medium rounded-xl overflow-hidden relative group cursor-pointer hover:border-primary transition-colors duration-200"
                >
                  <div className="h-32 bg-gray-100">
                    <img
                      src="https://design.gemcoder.com/staticResource/echoAiSystemImages/f53588cef76b848c1453f8bc3a6925c7.png"
                      alt="产品评价表单模板"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-dark">产品评价表单</h4>
                    <p className="text-xs text-dark-light mt-1">
                      收集用户对产品的详细评价
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      className="w-full bg-gray-100 text-dark text-sm py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      选择
                    </button>
                  </div>
                </div>
                {/* <!-- 客户调研问卷 --> */}
                <div
                  className="border border-gray-medium rounded-xl overflow-hidden relative group cursor-pointer hover:border-primary transition-colors duration-200"
                >
                  <div className="h-32 bg-gray-100">
                    <img
                      src="https://design.gemcoder.com/staticResource/echoAiSystemImages/8ddae3ec5cac6e7d57e4c5f528a3768a.png"
                      alt="客户调研问卷模板"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-dark">客户调研问卷</h4>
                    <p className="text-xs text-dark-light mt-1">
                      深入了解客户需求和偏好
                    </p>
                  </div>
                  <div className="p-4 pt-0">
                    <button
                      className="w-full bg-gray-100 text-dark text-sm py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 group-hover:bg-primary/10 group-hover:text-primary"
                    >
                      选择
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="p-6 border-t border-gray-200 flex items-center justify-end sticky bottom-0 bg-white"
          >
            <button className="btn-secondary mr-3" id="cancel-create-form">
              取消
            </button>
            <button className="btn-primary">开始创建</button>
          </div>
        </div>
      </div>
      {/* <!-- JavaScript --> */}
      <Script id="sxasd">
        {/* // 页面加载时初始化 */}
        {`
                document.addEventListener('DOMContentLoaded', () => {
                    // 侧边栏切换
                    const sidebarToggle = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('sidebar');

                    sidebarToggle.addEventListener('click', () => {
          sidebar.classList.toggle('-translate-x-full');
                    });

        // 导航栏滚动效果
        const header = document.getElementById('main-header');
                    window.addEventListener('scroll', () => {
                        if (window.scrollY > 10) {
          header.classList.add('shadow');
                        } else {
          header.classList.remove('shadow');
                        }
                    });

        // 创建表单模态框
        const createFormBtn = document.getElementById('create-form-btn');
        const createFormModal = document.getElementById('create-form-modal');
        const modalContent = document.getElementById('modal-content');
        const closeModalBtn = document.getElementById('close-modal-btn');
        const cancelCreateForm = document.getElementById('cancel-create-form');

        function openModal() {
          createFormModal.classList.remove('opacity-0', 'invisible');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
                    }

        function closeModal() {
          createFormModal.classList.add('opacity-0', 'invisible');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        document.body.style.overflow = '';
                    }

        createFormBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        cancelCreateForm.addEventListener('click', closeModal);

                    // 点击模态框外部关闭
                    createFormModal.addEventListener('click', (e) => {
                        if (e.target === createFormModal) {
          closeModal();
                        }
                    });

        // 初始化提交趋势图表
        const submissionTrendChart = echarts.init(document.getElementById('submission-trend-chart'));

        const trendOption = {
          tooltip: {
          trigger: 'axis',
        axisPointer: {
          type: 'shadow'
                            }
                        },
        legend: {
          data: ['提交数', '访问量']
                        },
        grid: {
          left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
                        },
        xAxis: {
          type: 'category',
        data: ['1日', '5日', '10日', '15日', '20日', '25日', '30日']
                        },
        yAxis: {
          type: 'value'
                        },
        series: [
        {
          name: '提交数',
        type: 'bar',
        data: [120, 190, 130, 240, 290, 230, 320],
        itemStyle: {
          color: '#4F46E5'
                                }
                            },
        {
          name: '访问量',
        type: 'line',
        data: [320, 490, 330, 410, 580, 480, 600],
        itemStyle: {
          color: '#10B981'
                                },
        lineStyle: {
          color: '#10B981'
                                }
                            }
        ]
                    };

        submissionTrendChart.setOption(trendOption);

        // 初始化表单类型分布图表
        const formTypeChart = echarts.init(document.getElementById('form-type-chart'));

        const typeOption = {
          tooltip: {
          trigger: 'item'
                        },
        legend: {
          orient: 'vertical',
        left: 'left'
                        },
        series: [
        {
          name: '表单类型',
        type: 'pie',
        radius: '80%',
        data: [
        {value: 35, name: '调查问卷' },
        {value: 25, name: '反馈收集' },
        {value: 20, name: '报名表单' },
        {value: 15, name: '满意度评价' },
        {value: 5, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
          shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                },
        color: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#6B7280']
                            }
        ]
                    };

        formTypeChart.setOption(typeOption);

                    // 窗口大小改变时重绘图表
                    window.addEventListener('resize', () => {
          submissionTrendChart.resize();
        formTypeChart.resize();
                    });
                });`}
      </Script>
    </>
  )
}
