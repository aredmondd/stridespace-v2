<template>
    <h1 class="font-martian-mono text-9xl mb-12 text-purple text-center">SIGNUP</h1>
    <div class="flex items-center justify-center">
        <form action="" class="flex flex-col gap-4">
            <input type="text" name="name" class="border-1 border-white px-2 py-2 bg-black" placeholder="name">
            <input type="email" name="email" class="border-1 border-white px-2 py-2 bg-black" placeholder="email">
            <input type="password" name="password" class="border-1 border-white px-2 py-2 bg-black" placeholder="password">
            <input type="password" name="password_conf" class="border-1 border-white px-2 py-2 bg-black" placeholder="confirm password">
            <button type="submit" class="border-1 border-white py-1 mt-6 hover:bg-purple hover:border-purple transition-colors duration-250 ease-in-out">login</button>
        </form>
    </div>
</template>