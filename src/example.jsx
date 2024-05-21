

const example = () => {
    return (
        <div>
            {/* form  */}
            <div className=" table-book sm:w-[85%] p-2 sm:p-7">
                <form action="w-full">
                    <input type="text" name="name" id="" placeholder="Enter your name" />
                    <input type="number" name="phone" id="" placeholder="Enter your phone number" />
                    <input type="email" name="email" id="" placeholder="Enter your email" />

                    <div className="sm:flex  sm:space-x-5">
                        <input type="date" name="date" id="" placeholder="Date" />
                        <input type="time" name="time" id="" placeholder="Time" />
                    </div>
                    <input type="submit" value="RESERVE" />
                </form>
            </div>
        </div>
    );
};

export default example;