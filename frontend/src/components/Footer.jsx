
function Footer(){
    return (
        <footer className="w-full">
            <div className="footer_copyright px-10">
                <div className="flex flex-wrap justify-between h-20 tracking-tighter text-gray-400">
                    <div>
                        <small>Copyright &copy; 2024 Ashutosh Sabale</small>
                    </div>
                    <div>
                        <small>Support</small>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full flex justify-center bg-[#191d28] items-center h-12">
                <div className="border p-2 rounded border-[#3dc6c1]">
                    <button className="text-[#3dc6c1]">Add hodlinfo to home screen</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer