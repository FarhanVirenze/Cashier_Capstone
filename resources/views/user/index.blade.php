<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center justify-between">
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ __('Kelola Akun Kasir') }}
            </h2>
            <a href="{{ route('admin.register') }}"
                class="inline-block px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded">
                + Tambah Kasir Baru
            </a>
        </div>
    </x-slot>

    <div class="py-6">
        <div class="max-w-6xl mx-auto sm:px-4 lg:px-6">
            <div class="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                <div class="px-4 pt-4 mb-3 w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
                    @if (request('search'))
                        <h2 class="pb-2 text-sm font-semibold leading-tight text-gray-800 dark:text-gray-200">
                            Search results for: <strong>{{ request('search') }}</strong>
                        </h2>
                    @endif

                    <form class="flex items-center gap-2">
                        <x-text-input id="search" name="search" type="text" class="w-full mr-2 text-sm py-1 px-2"
                            placeholder="Search by name or email ..." value="{{ request('search') }}" autofocus />
                        <x-primary-button type="submit" class="text-xs px-3 py-1">
                            {{ __('Search') }}
                        </x-primary-button>
                    </form>
                </div>

                @if (session('success'))
                    <p x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 5000)"
                        class="pb-2 ml-3 text-xs text-green-600 dark:text-green-400">
                        {{ session('success') }}
                    </p>
                @endif

                @if (session('danger'))
                    <p x-data="{ show: true }" x-show="show" x-transition x-init="setTimeout(() => show = false, 5000)"
                        class="pb-2 ml-3 text-xs text-red-600 dark:text-red-400">
                        {{ session('danger') }}
                    </p>
                @endif
            </div>
        </div>

        <div class="relative overflow-x-auto flex justify-center">
            <table class="w-full max-w-full text-xs text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="px-3 py-2">Id</th>
                        <th class="px-3 py-2">Name</th>
                        <th class="px-3 py-2">Email</th>
                        <th class="px-3 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($users as $user)
                        <tr class="odd:bg-white odd:dark:bg-gray-800 even:bg-gray-50 even:dark:bg-gray-700">
                            <td class="px-3 py-2 font-medium text-white dark:text-white">
                                {{ $user->id }}
                            </td>
                            <td class="px-2 py-1 font-medium text-white dark:text-white">
                                {{ $user->name }}
                            </td>
                            <td class="px-2 py-1">
                                {{ $user->email }}
                            </td>
                            <td class="px-3 py-2">
                                <div class="flex flex-col sm:flex-row sm:space-x-2 text-xs">
                                    <a href="{{ route('user.edit', $user) }}"
                                        class="text-blue-500 hover:underline mb-1 sm:mb-0">Edit</a>

                                    <form action="{{ route('user.destroy', $user) }}" method="POST"
                                        onsubmit="return confirm('Are you sure you want to delete this user?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                            class="text-red-600 hover:underline mb-1 sm:mb-0">Delete</button>
                                    </form>

                                    @if ($user->is_admin)
                                        <form action="{{ route('user.removeadmin', $user) }}" method="POST">
                                            @csrf
                                            @method('PATCH')
                                            <button type="submit" class="text-blue-600 dark:text-blue-400 whitespace-nowrap">
                                                Remove Admin
                                            </button>
                                        </form>
                                    @else
                                        <form action="{{ route('user.makeadmin', $user) }}" method="POST">
                                            @csrf
                                            @method('PATCH')
                                            <button type="submit" class="text-red-600 dark:text-red-400 whitespace-nowrap">
                                                Make Admin
                                            </button>
                                        </form>
                                    @endif
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr class="bg-white dark:bg-gray-800">
                            <td class="px-3 py-2 text-gray-900 dark:text-white" colspan="4">
                                Empty
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        @if ($users->hasPages())
            <div class="p-4 text-xs">
                {{ $users->links() }}
            </div>
        @endif
    </div>
    </div>
    </div>
</x-app-layout>