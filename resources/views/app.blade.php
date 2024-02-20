<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <link rel="preconnect dns-prefetch" href="{{url()->current()}}">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link rel="preconnect" href="//www.google-analytics.com">
    <link rel="preconnect" href="https://s3.amazonaws.com">
    <link rel="dns-prefetch" href="https://s3.amazonaws.com">

    <!-- Fonts -->
    @vite('resources/js/app.js')
    <title>{{ $meta['title'] ?? config('app.title') }}</title>

    @routes
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
