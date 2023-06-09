export default function IdSection() {

    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>,
            title: "Analytics",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>,
            title: "Datacenter security",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        }
    ]

    return (
        <section className="py-14  ">
            <div className="max-w-screen-full mx-auto px-4 text-gray-600 gap-16  md:px-32 lg:flex bg-[#3417ff] mx-32 py-8 rounded-t-2xl">

                <div className="mt-12 lg:mt-0 mr-8 items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={152}
                        height={152}
                        viewBox="0 0 152 152"
                        style={{
                            enableBackground: "new 0 0 344.002 344.002",
                        }}
                        xmlSpace="preserve"
                        fill="#fff"
                    >
                        <path d="M29.593 45.256c.94.206 1.812.192 4.49-1.866a24.562 24.562 0 0 0 4.575-4.604l.711-.943c6.085-8.095 20.332-27.044 40.909-26.014 16.972 1.239 28.999 14.053 34.787 37.063.197.782.315 1.262.448 1.63.883 3.763 2.368 8.451 4.506 9.994a2.978 2.978 0 0 0 1.751.566 2.996 2.996 0 0 0 1.89-5.32c-.593-.765-1.704-3.968-2.365-6.832a3.174 3.174 0 0 0-.16-.495c-.057-.195-.163-.621-.26-1.004-.918-3.646-3.354-13.333-9.263-22.445-7.63-11.765-18.04-18.204-30.935-19.133-.018-.001-.039-.001-.064-.005-23.768-1.212-39.372 19.536-46.032 28.398l-.702.926c-1.824 2.413-3.976 3.914-4.721 4.348a2.962 2.962 0 0 0-.72.405 3.036 3.036 0 0 0-1.133 3.051 2.991 2.991 0 0 0 2.288 2.28z" />
                        <path d="M104.629 56.749c2.262-5.648 2.316-11.486.148-16.01-1.929-4.036-5.531-6.963-10.412-8.459-7.165-2.192-15.85 1.786-23.807 10.902-.099.111-11.426 12.025-23.32 19.307-.088.054-8.795 5.277-17.889 7.755a2.984 2.984 0 0 0-1.786 1.364h15.138c4.388-2.04 7.421-3.861 7.648-3.998 12.904-7.9 24.606-20.351 24.705-20.465 4.83-5.534 11.979-10.842 17.555-9.132 3.281 1.003 5.555 2.791 6.762 5.313 1.445 3.018 1.334 7.099-.308 11.196-2.059 5.149-7.068 11.017-14.468 17.085h9.049c4.834-4.616 8.905-9.665 10.986-14.858zM81.112 81.758H70.264c-8.088 5.12-24.092 14.922-35.696 19.881a3.001 3.001 0 0 0-1.579 3.934 3.002 3.002 0 0 0 2.758 1.817c.39 0 .792-.077 1.176-.242 13.08-5.591 31.358-16.999 38.608-21.642a158.28 158.28 0 0 0 5.581-3.749zM32.066 60.183c3.064-.922 5.839-2.498 8.604-4.069 2.336-1.329 4.658-2.525 6.805-4.159 4.183-3.182 7.784-6.897 11.096-10.963a63.646 63.646 0 0 1 4.274-4.719 62.096 62.096 0 0 1 2.525-2.391 56.363 56.363 0 0 1 1.371-1.185c.232-.198.472-.391.708-.585.06-.05.526-.415.647-.511a43.687 43.687 0 0 1 6.647-4.223c2.208-1.133 4.423-1.929 7.113-2.488.893-.187 1.086-.205 1.754-.276 1.624-.169 2.997-1.237 2.997-2.998 0-1.506-1.367-3.163-2.997-2.995-10.829 1.124-20.093 7.893-27.231 15.756-1.358 1.498-2.58 3.106-3.895 4.64-1.721 2.014-3.602 3.892-5.565 5.667-2.02 1.824-3.652 3.127-6.039 4.495-2.525 1.451-5.102 2.917-7.72 4.191-.898.439-1.672.724-2.686 1.03-1.564.469-2.534 2.082-2.094 3.685.425 1.551 2.12 2.569 3.684 2.098zm.996 31.566c3.002-1.031 11.746-4.25 22.124-9.99H41.867c-5.069 2.291-8.971 3.712-10.751 4.325a3.947 3.947 0 0 0-.244.087 2.993 2.993 0 0 0-1.739 3.862 2.996 2.996 0 0 0 2.801 1.935c.342 0 .686-.059 1.022-.181l.106-.038z" />
                        <path d="M91.005 46.627a2.996 2.996 0 0 0-4.18.698C79.537 57.54 69.829 65.557 60.506 71.607H70.94c7.513-5.644 14.868-12.539 20.763-20.804a2.995 2.995 0 0 0-.699-4.176zm23.582 62.959c-4.152-1.387-9.233-5.005-14.147-8.504-7.119-5.067-13.261-9.448-18.269-8.584-3.764.65-10.335 4.849-20.711 11.69-7.482 4.932-15.959 10.52-19.648 11.515a2.996 2.996 0 0 0-2.114 3.671 3 3 0 0 0 2.891 2.219c.257 0 .52-.033.78-.104 4.621-1.243 12.765-6.612 21.388-12.295 6.965-4.591 15.633-10.304 18.432-10.788 2.546-.433 8.77 3.997 13.775 7.56 5.271 3.756 10.724 7.639 15.726 9.306a2.994 2.994 0 0 0 3.789-1.893 2.995 2.995 0 0 0-1.892-3.793z" />
                        <path d="M107.087 124.262c-2.418-.873-6.342-3.299-10.137-5.644-8.021-4.955-13.121-7.963-16.776-7.329-3.706.638-11.487 5.927-24.549 15.462a380.753 380.753 0 0 1-3.935 2.852 2.995 2.995 0 0 0-.72 4.173 2.991 2.991 0 0 0 2.45 1.267c.599 0 1.2-.177 1.726-.547.996-.705 2.392-1.724 4.014-2.907 5.195-3.796 19.003-13.875 22.001-14.392 1.866-.127 8.608 4.028 12.634 6.517 4.243 2.622 8.253 5.097 11.252 6.182a3 3 0 0 0 3.839-1.8 2.995 2.995 0 0 0-1.799-3.835z" />
                        <path d="M96.968 139.157c-1.684-1.099-3.233-2.203-4.727-3.268-4.914-3.509-9.163-6.543-13.818-5.734-5.242.906-13.592 9.299-15.212 10.973a2.995 2.995 0 0 0 .07 4.234 2.983 2.983 0 0 0 2.084.844 2.988 2.988 0 0 0 2.154-.911c4.013-4.146 9.713-8.855 11.924-9.237 2.19-.374 5.495 1.976 9.318 4.704 1.473 1.053 3.142 2.244 4.934 3.412a2.997 2.997 0 0 0 4.148-.873 2.996 2.996 0 0 0-.875-4.144zm9.503-71.537a16.908 16.908 0 0 0 1.158 3.987h6.811c-1.19-1.609-1.848-3.493-2.189-5.58-.629-3.806-6.403-2.187-5.78 1.593zm13.835 14.866c1.379.583 2.907.478 3.849-.729h-5.478a45.931 45.931 0 0 0 1.63.729zm-2.791 10.459c-2.247-.692-3.956-1.571-6.339-2.977-3.439-2.034-6.623-4.799-8.773-8.211h-6.708c3.817 8.167 11.641 14.321 20.229 16.965 3.702 1.141 5.274-4.641 1.591-5.777zM17.597 74.286H135.79v3.956H17.597v-3.956zm123.565-1.904H152v7.767h-10.838v-7.767zM0 72.382h10.839v7.767H0v-7.767z" />
                    </svg>

                    <h3 className="text-white font-black  mt-4 arkhip text-3xl mr-3">
                        STARLI-099
                    </h3>
                </div>



                <div>
                    <div className="max-w-full space-y-3">
                        <h3 className="text-indigo-600 font-semibold">
                            Features
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Simple solutions for complex issues
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}