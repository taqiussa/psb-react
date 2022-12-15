<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'kode_daftar',
        'password',
        'user_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the panitia that owns the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function panitia(): BelongsTo
    {
        return $this->belongsTo(User::class)->withDefault();
    }

    /**
     * Get the biodata associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function biodata(): HasOne
    {
        return $this->hasOne(Biodata::class);
    }

    /**
     * Get the orangtua associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function orangTua(): HasOne
    {
        return $this->hasOne(OrangTua::class);
    }

    /**
     * Get the alamat associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function alamat(): HasOne
    {
        return $this->hasOne(Alamat::class);
    }

    /**
     * Get the wali associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function wali(): HasOne
    {
        return $this->hasOne(Wali::class);
    }

    /**
     * Get the sekolahsd associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function sekolahSd(): HasOne
    {
        return $this->hasOne(SekolahSd::class);
    }

    /**
     * Get the sekolahasal associated with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function sekolahAsal(): HasOne
    {
        return $this->hasOne(SekolahAsal::class);
    }

    /**
     * Interact with the user's name.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Str::title($value),
            set: fn ($value) => Str::title($value),
        );
    }
}
