<?php

namespace App\Http\Middleware;

use Closure;

class CheckRole
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string  $role
     * @return mixed
     */
    public function handle($request, Closure $next, $role)
    {
        if (! $request->user()->hasRole($role)) {
            
            if ($request->expectsJson()) {
                return response(['message' =>'Unauthorized.'], 401);
            }
            else {
                return view('errors.forbidden');
            }
        }

        return $next($request);
    }

}