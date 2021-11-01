<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEmployeeRequest;
use App\Models\Employee;
use App\Http\Resources\EmployeeResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return EmployeeResource::collection(Employee::query()->paginate());
    }

    /**
     * Store a new employee
     *
     * @param  \App\Http\Requests\StoreEmployeeRequest $request
     * @return Illuminate\Http\Response
     */
    public function store(StoreEmployeeRequest $request)
    {
        $validated = $request->validated();
        $model = new Employee();
        $model->fill($validated);
        if (!$model->save()) {
            throw new \Exception('Can\'t save the model');
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param Employee $employee
     * @return EmployeeResource;
     */
    public function delete(Employee $employee)
    {
        $employee->delete();

        return new EmployeeResource($employee);
    }
}
